import { useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import dayjs from "dayjs";

import { BACKEND_URL } from "shared-constant";
import { tokenDecryptor } from "shared-util";
import { ErrorResponseDef } from "shared-type/api";
import { datadogRum } from "@datadog/browser-rum";

export const axiosNoTokenInstance = axios.create({
  timeout: 10000,
  baseURL: BACKEND_URL,
});

export const axiosInstance = axios.create({
  timeout: 10000,
  baseURL: BACKEND_URL,
});

export const useAxiosInterceptor = () => {
  const accessTokenLimitMs = 10000;
  let isRefreshing = false;
  let refreshSubscribers: (() => void)[] = [];

  const subscribeTokenRefresh = (cb: () => void) => {
    refreshSubscribers.push(cb);
  };

  const onRefreshed = () => {
    refreshSubscribers.map((cb) => cb());
    refreshSubscribers = [];
  };

  // accessToken이 만료 된 경우 refresh 함수를 호출하여 access, refreshToken 재발급 받는 함수
  const getNewAccessToken = async (): Promise<string> => {
    if (!isRefreshing) {
      isRefreshing = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          throw new axios.Cancel("getNewAccessToken - No refreshToken");
        }

        const response = await axios.get<{ data: { access_token: string; refresh_token: string } }>(
          `${BACKEND_URL}/auth/refresh`,
          {
            headers: { "x-refresh-token": refreshToken },
          }
        );
        const { access_token, refresh_token } = response.data.data;
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("refreshToken", refresh_token);
        onRefreshed();
        return access_token;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const { error_code } = error.response.data as { error_code: string };
          if (error_code === "EMPTY_JWT_REDIS" || error_code === "UNAUTHORIZED") {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            onRefreshed();
            throw new axios.Cancel("getNewAccessToken - No Token");
          }
        }
        throw error;
      } finally {
        isRefreshing = false;
      }
    } else {
      return new Promise<string>((resolve) => {
        subscribeTokenRefresh(() => {
          const newToken = localStorage.getItem("accessToken");
          resolve(newToken || "");
        });
      });
    }
  };

  const requestConfigHandler = async (config: AxiosRequestConfig) => {
    const accessTokenData = localStorage.getItem("accessToken");
    const refreshTokenData = localStorage.getItem("refreshToken");
    const matchingUrlReGex = /^(?!.*comments)(?!.*bookmark).*\b(companies|jds|keywords|ads)\b.*$/i;

    // 0. token 없는 경우
    if (!accessTokenData || !refreshTokenData) {
      // accessToken 없이도 접근할 수 있는 API
      if (config.url && matchingUrlReGex.test(config.url)) {
        return config;
      }

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      throw new axios.Cancel(`RequestConfig - No Token (${config.url})`);
    }

    const { exp: accessTokenExp } = tokenDecryptor(accessTokenData);
    const { exp: refreshTokenExp } = tokenDecryptor(refreshTokenData);
    const accessExpireTime = dayjs(new Date(accessTokenExp * 1000), "YYYY-MM-DDTHH:mm:ss");
    const refreshExpireTime = dayjs(new Date(refreshTokenExp * 1000), "YYYY-MM-DDTHH:mm:ss");
    const currentTime = dayjs(new Date(), "YYYY-MM-DDTHH:mm:ss");

    const isRefreshExpired = currentTime.isAfter(refreshExpireTime);
    const isAccessExpired = accessExpireTime.diff(currentTime, "ms") <= accessTokenLimitMs;

    // 1. refreshToken 만료된 경우 -> 모든 token 삭제
    if (isRefreshExpired) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      throw new axios.Cancel("RequestConfig - Refresh Token Expired");
    }

    // 2. accessToken 만료되었을 경우 -> 새로운 accessToken 들고 옴
    if (isAccessExpired) {
      const newAccessToken = await getNewAccessToken();
      return {
        ...config,
        headers: {
          "x-access-token": newAccessToken,
        },
      };
    }

    return {
      ...config,
      headers: {
        "x-access-token": accessTokenData,
      },
    };
  };

  const responseErrorHandler = async (error: AxiosError<ErrorResponseDef>) => {
    datadogRum.addAction("http_request_failed", {
      AxiosError: error,
    });

    if (error.response?.data.error_code === "EXPIRED_JWT") {
      await getNewAccessToken();
    }

    if (error.response?.data.error_code === "MALFORMED_JWT") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return Promise.resolve();
    }

    if (error.response?.data.error_code === "EMPTY_JWT_REDIS" || error.response?.data.error_code === "UNAUTHORIZED") {
      return Promise.resolve();
    }

    return Promise.reject(error);
  };

  const requestInterceptor = axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => requestConfigHandler(config),
    (error) => Promise.reject(error)
  );

  const responseInterceptor = axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => responseErrorHandler(error)
  );

  useEffect(
    () => () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    },
    [requestInterceptor, responseInterceptor]
  );
};
