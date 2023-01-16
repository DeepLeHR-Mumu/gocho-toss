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

  const time = 55000;
  let isLock = false;
  let readyQueueArr: ((token: string) => void)[] = [];
  const saveQueue = (callback: (token: string) => void) => readyQueueArr.push(callback);
  // const activeQueue = (token: string) => readyQueueArr.map((callback) => callback(token));

  const getRefreshTokenCreator = async () => {
    const refreshToken = tokenService.getRefreshToken();
    // TODO : 해당 에러에 대한 catch 잡아주기;
    const { data: newTokenData } = await axiosNoTokenInstance.get("/auth/refresh", {
      headers: { "x-refresh-token": refreshToken },
    });
    const newToken = (await newTokenData.data.access_token) as string;
    tokenService.updateAllToken(await newTokenData.data.access_token, await newTokenData.data.refresh_token);
    // activeQueue(await newTokenData.data.access_token);
    // readyQueue안에는 저장되어야 할 resolve함수가 있어야한느데 지금 undefinder이다
    readyQueueArr.forEach((callback) => {
      callback(newTokenData.data.access_token);
    });
    isLock = false;
    readyQueueArr = [];
    return { newToken };
  };

  const requestConfigHandler = async (config: AxiosRequestConfig) => {
    const accessTokenData = tokenService.getAccessToken();
    const refreshTokenData = tokenService.getRefreshToken();
    // TODO : cancel check
    // const controls = new AbortController();

    if (!accessTokenData || !refreshTokenData) {
      router.push(INTERNAL_URL.LOGIN);
      // controls.abort();
    }

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

    if (accessCreateTime - currentTime <= time) {
      if (!isLock) {
        isLock = true;
        const { newToken } = await getRefreshTokenCreator();
        return {
          ...config,
          headers: {
            "x-access-token": newToken,
          },
        };
      }

      return new Promise(() => {
        saveQueue((accessToken) => axiosInstance({ ...config, headers: { "x-access-token": accessToken } }));
      });
    }

    const newConfig = {
      ...config,
      headers: {
        "x-access-token": accessTokenData,
      },
    };

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
