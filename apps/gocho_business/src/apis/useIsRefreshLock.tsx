import { useRouter } from "next/router";
import { useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { BUSINESS_BACKEND_URL } from "shared-constant/externalURL";
import { managerTokenDecryptor } from "shared-util/tokenDecryptor";

import { INTERNAL_URL } from "@/constants/url";

import { tokenService } from "@/utils/tokenService";
import { ErrorResponseDef } from "@/types/errorType";
import { useModal } from "@/globalStates/useModal";

export const axiosNoTokenInstance = axios.create({
  timeout: 10000,
  baseURL: BUSINESS_BACKEND_URL,
});

export const axiosInstance = axios.create({
  timeout: 10000,
  baseURL: BUSINESS_BACKEND_URL,
});

export const useAxiosInterceptor = () => {
  const router = useRouter();
  let isLock = false;
  let readyQueueArr: ((token: string) => void)[] = [];
  const { setCurrentModal } = useModal();

  const saveQueue = (callback: (token: string) => void) => {
    readyQueueArr.push(callback);
  };

  const activeQueue = (token: string) => {
    readyQueueArr.forEach((callback) => callback(token));
  };

  const getRefreshTokenCreator = async (): Promise<string | void> => {
    try {
      const refreshToken = tokenService.getRefreshToken();
      const { data: newTokenData } = await axios.get(`${BUSINESS_BACKEND_URL}/auth/refresh`, {
        headers: { "x-refresh-token": refreshToken },
      });
      activeQueue(newTokenData.data.access_token);
      isLock = false;
      readyQueueArr = [];
      tokenService.updateAllToken(newTokenData.data.access_token, newTokenData.data.refresh_token);
      return newTokenData.data.access_token;
    } catch (error) {
      isLock = false;
      readyQueueArr = [];
      tokenService.removeAllToken();
    }
    return undefined;
  };

  const goToLoginPage = () => {
    tokenService.removeAllToken();
    router.push(INTERNAL_URL.LOGIN);
  };

  const requestConfigHandler = async (config: AxiosRequestConfig) => {
    const accessToken = tokenService.getAccessToken();
    const refreshToken = tokenService.getRefreshToken();

    if (!accessToken || !refreshToken) {
      goToLoginPage();
      return null;
    }

    const { exp: refreshTokenExp } = managerTokenDecryptor(refreshToken);
    const refreshCreateTime = new Date(Number(refreshTokenExp) * 1000).getTime();
    const currentTime = new Date().getTime();

    if (refreshCreateTime <= currentTime) {
      tokenService.removeAllToken();
      setCurrentModal("loginModal");
      return null;
    }

    const newConfig = config;
    newConfig.headers = newConfig.headers ?? {};
    newConfig.headers["x-access-token"] = accessToken as string;

    return newConfig;
  };

  const requestErrorHandler = async (error: AxiosError) => Promise.reject(error);

  const responseConfigHandler = (response: AxiosResponse) => response;
  const responseErrorHandler = async (error: AxiosError<ErrorResponseDef>) => {
    const { config } = error;
    const originalRequest = config;

    const errorStatus = {
      status: error.response?.data.status,
      errorCode: error.response?.data.error_code,
      errorMsg: error.response?.data.error_message,
      path: error.response?.data.path,
    };

    if (isLock) {
      return new Promise((resolve) => {
        saveQueue((token) => {
          if (originalRequest.headers) originalRequest.headers["x-access-token"] = token;
          return resolve(axiosInstance(originalRequest));
        });
      });
    }

    isLock = true;

    if (errorStatus.errorCode === "EXPIRED_JWT") {
      const newAccessToken = await getRefreshTokenCreator();

      if (originalRequest.headers) originalRequest.headers["x-access-token"] = newAccessToken as string;
      return axiosInstance(originalRequest);
    }

    if (errorStatus.errorCode === "MALFORMED_JWT" && errorStatus.status === 401) {
      setCurrentModal("loginModal");
      return null;
    }

    return Promise.reject(error);
  };

  const requestInterceptor = axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => requestConfigHandler(config),
    (error) => requestErrorHandler(error)
  );

  const responseInterceptor = axiosInstance.interceptors.response.use(
    (response) => responseConfigHandler(response),
    (error: AxiosError<ErrorResponseDef>) => responseErrorHandler(error)
  );

  useEffect(
    () => () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    },
    [requestInterceptor, responseInterceptor]
  );
};
