import { useEffect } from "react";
import { useRouter } from "next/router";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { BUSINESS_BACKEND_URL } from "shared-constant/externalURL";

import { tokenService } from "@/utils/tokenService";
import { ErrorResponseDef } from "@/types/errorType";
import { useModal } from "@/globalStates/useModal";
import { INTERNAL_URL } from "@/constants/url";

import { getTokenDateInfoCreator } from "./util";

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
  const accessTokenLimitMs = 55000;
  const refreshTokenOverLimitMs = -1.8e6;
  let isLock = false;
  let readyQueueArr: ((token: string) => void)[] = [];

  const { setCurrentModal } = useModal();
  const saveQueue = (callback: (token: string) => void) => readyQueueArr.push(callback);
  const activeQueue = (token: string) => readyQueueArr.forEach((callback) => callback(token));

  const getRefreshTokenCreator = async (): Promise<{ newToken: string } | void> => {
    const refreshToken = tokenService.getRefreshToken();
    const refreshResults = await axios
      .get(`${BUSINESS_BACKEND_URL}/auth/refresh`, {
        headers: { "x-refresh-token": refreshToken },
      })
      .then(({ data }) => {
        const newToken = data.data.access_token as string;
        tokenService.updateAllToken(data.data.access_token, data.data.refresh_token);
        activeQueue(data.access_token);
        return { newToken };
      })
      .finally(() => {
        isLock = false;
        readyQueueArr = [];
      });

    return refreshResults;
  };

  const requestConfigHandler = async (config: AxiosRequestConfig) => {
    const { accessTokenData, refreshTokenData, accessCreateTime, refreshCreateTime, currentTime } =
      getTokenDateInfoCreator();

    if (!accessTokenData || !refreshTokenData) router.replace(INTERNAL_URL.LOGIN);

    if (
      refreshCreateTime <= currentTime &&
      new Date(refreshCreateTime - currentTime).getTime() <= refreshTokenOverLimitMs
    )
      router.replace(INTERNAL_URL.LOGIN);

    if (refreshCreateTime <= currentTime && router.pathname !== INTERNAL_URL.LOGIN) setCurrentModal("loginModal");

    if (accessCreateTime - currentTime <= accessTokenLimitMs) {
      if (!isLock) {
        isLock = true;
        const newToken = await getRefreshTokenCreator();
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

    return {
      ...config,
      headers: {
        "x-access-token": accessTokenData,
      },
    };
  };

  const requestErrorHandler = async (error: AxiosError) => Promise.reject(error);

  const responseConfigHandler = (response: AxiosResponse) => response;

  const responseErrorHandler = async (error: AxiosError<ErrorResponseDef>) =>
    // 내일 코드 리뷰를 위해 남겨둔 부분
    // const errorStatus = {
    //   status: error.response?.data.status,
    //   errorCode: error.response?.data.error_code,
    //   errorMsg: error.response?.data.error_message,
    //   path: error.response?.data.path,
    // };

    // if (errorStatus.errorCode === "EXPIRED_JWT" && errorStatus.status === 401 && errorStatus.path === "/auth/refresh") {
    //   return null;
    // }

    Promise.reject(error);

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
