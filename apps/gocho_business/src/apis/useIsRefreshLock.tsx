import { useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { BUSINESS_BACKEND_URL } from "shared-constant/externalURL";
import { managerTokenDecryptor } from "shared-util/tokenDecryptor";

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
  let isLock = false;
  let isErrorLock = false;
  const readyQueueArr: ((token: string) => void)[] = [];
  const saveQueue = (callback: (token: string) => void) => readyQueueArr.push(callback);
  const activeQueue = (token: string) => readyQueueArr.forEach((callback) => callback(token));
  const readyErrorArr: ((token: string) => void)[] = [];
  const saveErrorQueue = (callback: (token: string) => void) => readyErrorArr.push(callback);
  const activeErrorQueue = (token: string) => readyErrorArr.forEach((callback) => callback(token));

  const { setCurrentModal } = useModal();

  const requestConfigHandler = async (config: AxiosRequestConfig) => {
    const accessToken = tokenService.getAccessToken();
    const refreshToken = tokenService.getRefreshToken();

    if (!accessToken || !refreshToken) return null;

    const { exp: refreshTokenExp } = managerTokenDecryptor(refreshToken);
    const refreshCreateTime = new Date(Number(refreshTokenExp) * 1000).getTime();
    const currentTime = new Date().getTime();

    // eslint-disable-next-line no-console
    console.log(new Date(refreshCreateTime - currentTime).getSeconds());

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

    if (errorStatus.status === 401) {
      console.log("401");

      if (errorStatus.errorCode === "EXPIRED_JWT" && !isErrorLock) {
        isErrorLock = true;
      }

      if (!isLock) {
        console.log("isLock");
        isLock = true;
        const refreshToken = tokenService.getRefreshToken();
        const { data: newTokenData } = await axios.get(`${BUSINESS_BACKEND_URL}/auth/refresh`, {
          headers: { "x-refresh-token": refreshToken },
        });
        tokenService.updateAllToken(newTokenData.data.access_token, newTokenData.data.refresh_token);
        isLock = false;
        if (originalRequest.headers) originalRequest.headers["x-access-token"] = newTokenData.data.access_token;
        console.log("엑티브 실행");
        activeQueue(newTokenData.data.access_token);
        // activeErrorQueue(newTokenData.data.access_token)
      }

      return new Promise((resolve) => {
        console.log("last saveQueue");
        saveQueue((accessToken) => {
          console.log("저장함");
          if (originalRequest.headers) originalRequest.headers["x-access-token"] = accessToken;
          resolve(axiosInstance(originalRequest));
        });
      });
    }

    return Promise.reject(error);

    // if (isLock) {
    //   return new Promise((resolve) => {
    //     saveQueue((token) => {
    //       if (originalRequest.headers) originalRequest.headers["x-access-token"] = token;
    //       return resolve(axiosInstance(originalRequest));
    //     });
    //   });
    // }

    // isLock = true;

    // if (errorStatus.errorCode === "EXPIRED_JWT") {
    //   const newAccessToken = await getRefreshTokenCreator();
    //   if (originalRequest.headers) originalRequest.headers["x-access-token"] = newAccessToken as string;
    //   return axiosInstance(originalRequest);
    // }

    // if (errorStatus.errorCode === "MALFORMED_JWT" && errorStatus.status === 401) {
    //   tokenService.removeAllToken();
    //   setCurrentModal("loginModal");
    //   return null;
    // }
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
