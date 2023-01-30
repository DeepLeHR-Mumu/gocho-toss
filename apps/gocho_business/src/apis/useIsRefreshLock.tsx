import { useEffect } from "react";
import { useRouter } from "next/router";
import axios, { AxiosRequestConfig } from "axios";

import { BUSINESS_BACKEND_URL } from "shared-constant/externalURL";

import { tokenService, getTokenDateInfoCreator } from "@/utils/tokenService";
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
  const accessTokenLimitMs = 10000;
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
      // .catch((error) => {
      //   const { error_code } = error.response.data;
      //   if (error_code === "EMPTY_JWT") {
      //     tokenService.removeAllToken();
      //     router.replace(INTERNAL_URL.LOGIN);
      //   }
      // })
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

    if (refreshCreateTime <= currentTime && router.asPath !== INTERNAL_URL.LOGIN) setCurrentModal("loginModal");

    if (accessCreateTime - currentTime <= accessTokenLimitMs && !isLock) {
      isLock = true;
      const newToken = await getRefreshTokenCreator();
      return {
        ...config,
        headers: {
          "x-access-token": newToken,
        },
      };
    }

    if (accessCreateTime - currentTime <= accessTokenLimitMs && isLock) {
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

  const requestInterceptor = axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => requestConfigHandler(config),
    (error) => Promise.reject(error)
  );

  const responseInterceptor = axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  useEffect(
    () => () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    },
    [requestInterceptor, responseInterceptor]
  );
};
