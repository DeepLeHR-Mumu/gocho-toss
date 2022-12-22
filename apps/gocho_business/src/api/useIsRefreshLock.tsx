import { useRouter } from "next/router";
import { useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { BUSINESS_BACKEND_URL } from "shared-constant/externalURL";
import { managerTokenDecryptor } from "shared-util/tokenDecryptor";

import { INTERNAL_URL } from "@/constants/index";

import { tokenService } from "@/util/tokenService";
import { ResponseErrorStatus } from "./type";

export const axiosNoTokenInstance = axios.create({
  timeout: 10000,
  baseURL: BUSINESS_BACKEND_URL,
});

export const axiosInstance = axios.create({
  timeout: 10000,
  baseURL: BUSINESS_BACKEND_URL,
});

export const useAxiosInterceptor = () => {
  console.log("heiuf");
  const router = useRouter();
  let lock = false;
  let subscribers: ((token: string) => void)[] = [];

  const goToLoginPage = () => {
    tokenService.removeAllToken();
    router.push(INTERNAL_URL.LOGIN, undefined, { shallow: true });
  };

  const subscribeTokenRefresh = (callback: (token: string) => void) => {
    subscribers.push(callback);
  };

  const onRefreshed = (token: string) => {
    subscribers.forEach((callback) => callback(token));
  };

  const getRefreshToken = async (): Promise<string | void> => {
    try {
      const refreshToken = tokenService.getRefreshToken();
      const { data: newTokenData } = await axios.get(`${BUSINESS_BACKEND_URL}/auth/refresh`, {
        headers: { "x-refresh-token": refreshToken },
      });
      lock = false;
      onRefreshed(newTokenData.data.access_token);
      subscribers = [];
      tokenService.updateAllToken(`${newTokenData.data.access_token}`, `${newTokenData.data.refresh_token}`);
      return newTokenData.data.access_token;
    } catch (error) {
      lock = false;
      subscribers = [];
      tokenService.removeAllToken();
    }
    return undefined;
  };

  const requestConfigHandler = async (config: AxiosRequestConfig) => {
    const accessToken = tokenService.getAccessToken();
    const refreshToken = tokenService.getRefreshToken();

    if (!accessToken || !refreshToken) {
      goToLoginPage();
      return null;
    }

    const { exp: refreshExp } = managerTokenDecryptor(refreshToken);
    const refreshCreateTime = new Date(Number(refreshExp) * 1000).getTime();
    const currentTime = new Date().getTime();

    if (refreshCreateTime !== 0 && refreshCreateTime <= currentTime) {
      goToLoginPage();
      return null;
    }

    const newConfig = config;
    newConfig.headers = newConfig.headers ?? {};
    newConfig.headers["x-access-token"] = accessToken as string;

    return newConfig;
  };

  const requestErrorHandler = async (error: AxiosError) => Promise.reject(error);

  const responseConfigHandler = (response: AxiosResponse) => response;

  const responseErrorHandler = async (error: AxiosError<ResponseErrorStatus>) => {
    const { config } = error;
    const originalRequest = config;

    const errorStatus = {
      errorCode: error.response?.data.error_code,
      errorMsg: error.response?.data.error_message,
      path: error.response?.data.path,
    };

    if (errorStatus.path === "/auth/refresh") return Promise.reject(error);

    if (lock) {
      return new Promise((resolve) => {
        subscribeTokenRefresh((token: string) => {
          if (originalRequest.headers) originalRequest.headers["x-access-token"] = token;
          resolve(axiosInstance(originalRequest));
        });
      });
    }

    lock = true;

    const accessToken = await getRefreshToken();

    if (accessToken) {
      if (originalRequest.headers) originalRequest.headers["x-access-token"] = accessToken;
      return axios(config);
    }

    if (errorStatus.errorCode === "MALFORMED_JWT" || errorStatus.errorCode === "UNAUTHORIZED") {
      goToLoginPage();
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
    (error: AxiosError<ResponseErrorStatus>) => responseErrorHandler(error)
  );

  useEffect(
    () => () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    },
    [requestInterceptor, responseInterceptor]
  );
};
