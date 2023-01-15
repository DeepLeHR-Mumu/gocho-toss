import { useEffect } from "react";
import { useRouter } from "next/router";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { BUSINESS_BACKEND_URL } from "shared-constant/externalURL";
import { managerTokenDecryptor } from "shared-util/tokenDecryptor";

import { tokenService } from "@/utils/tokenService";
import { ErrorResponseDef } from "@/types/errorType";
import { useModal } from "@/globalStates/useModal";
import { INTERNAL_URL } from "@/constants/url";

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
  const { setCurrentModal } = useModal();

  const timeout = 55000;
  let isLock = false;
  let readyQueueArr: ((token: string) => void)[] = [];
  const saveQueue = (callback: (token: string) => void) => readyQueueArr.push(callback);
  const activeQueue = (token: string) => readyQueueArr.forEach((callback) => callback(token));

  const getRefreshTokenCreator = async () => {
    const refreshToken = tokenService.getRefreshToken();
    const { data: newTokenData } = await axios.get(`${BUSINESS_BACKEND_URL}/auth/refresh`, {
      headers: { "x-refresh-token": refreshToken },
    });
    tokenService.updateAllToken(newTokenData.data.access_token, newTokenData.data.refresh_token);
    isLock = false;
    activeQueue(newTokenData.data.access_token);
    const newToken = newTokenData.data.access_token as string;
    readyQueueArr = [];
    return { newToken };
  };

  const requestConfigHandler = async (config: AxiosRequestConfig) => {
    const accessTokenData = tokenService.getAccessToken();
    const refreshTokenData = tokenService.getRefreshToken();
    // TODO : cancel check
    const controls = new AbortController();

    if (!accessTokenData || !refreshTokenData) {
      router.push(INTERNAL_URL.LOGIN);
      controls.abort();
    }

    const newConfig = config;
    newConfig.headers = {
      "x-access-token": accessTokenData,
    };

    const { exp: accessTokenExp } = managerTokenDecryptor(accessTokenData);
    const { exp: refreshTokenExp } = managerTokenDecryptor(refreshTokenData);
    const accessCreateTime = new Date(accessTokenExp * 1000).getTime();
    const refreshCreateTime = new Date(refreshTokenExp * 1000).getTime();
    const currentTime = new Date().getTime();

    // console.log(new Date(accessCreateTime - currentTime).getTime());

    if (refreshCreateTime <= currentTime) {
      tokenService.removeAllToken();
      setCurrentModal("loginModal");
    }

    if (accessCreateTime - currentTime <= timeout && !isLock) {
      isLock = true;
      const { newToken } = await getRefreshTokenCreator();
      newConfig.headers["x-access-token"] = newToken;
      return newConfig;
    }

    if (isLock) {
      return new Promise((resolve) => {
        saveQueue((accessToken) => {
          if (newConfig.headers) newConfig.headers["x-access-token"] = accessToken;
          resolve(axiosInstance(newConfig));
        });
      });
    }

    return newConfig;
  };

  const requestErrorHandler = async (error: AxiosError) => Promise.reject(error);

  const responseConfigHandler = (response: AxiosResponse) => response;

  const responseErrorHandler = async (error: AxiosError<ErrorResponseDef>) => {
    const errorStatus = {
      status: error.response?.data.status,
      errorCode: error.response?.data.error_code,
      errorMsg: error.response?.data.error_message,
      path: error.response?.data.path,
    };

    if (errorStatus.errorCode === "MALFORMED_JWT" && errorStatus.status === 401) {
      tokenService.removeAllToken();
      setCurrentModal("loginModal");
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
