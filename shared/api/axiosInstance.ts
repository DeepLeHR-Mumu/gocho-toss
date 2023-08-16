import { useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import dayjs from "dayjs";

import { BACKEND_URL } from "shared-constant";
import { tokenDecryptor } from "shared-util";
import { ErrorResponseDef } from "shared-type/api/errorResponseType";

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
    refreshSubscribers.map((cb) => {
      return cb();
    });
    refreshSubscribers = [];
  };

  // accessToken이 만료 된 경우 refresh 함수를 호출하여 access, refreshToken 재발급 받는 함수
  const getNewAccessToken = async (): Promise<string> => {
    if (!isRefreshing) {
      isRefreshing = true;
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        throw new axios.Cancel("getNewAccessToken - No refreshToken");
      }

      axios
        .get(`${BACKEND_URL}/auth/refresh`, {
          headers: { "x-refresh-token": refreshToken },
        })
        .then(({ data }) => {
          isRefreshing = false;
          localStorage.setItem("accessToken", data.data.access_token);
          localStorage.setItem("refreshToken", data.data.refresh_token);
          onRefreshed();
        })
        .catch((error) => {
          isRefreshing = false;
          const { error_code } = error.response.data;
          if (error_code === "EMPTY_JWT") {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            throw new axios.Cancel("getNewAccessToken - No Token");
          }

          throw error;
        });
    }

    return new Promise<string>((resolve) => {
      subscribeTokenRefresh(() => {
        const newToken = localStorage.getItem("accessToken");
        resolve(newToken || "");
      });
    });
  };

  const requestConfigHandler = async (config: AxiosRequestConfig) => {
    const accessTokenData = localStorage.getItem("accessToken");
    const refreshTokenData = localStorage.getItem("refreshToken");
    const matchingUrlReGex = /^(?!.*comments)(?!.*bookmark).*\b(companies|jds)\b.*$/i;

    // 0. token 없는 경우
    if (!accessTokenData || !refreshTokenData) {
      // accessToken 없이도 접근할 수 있는 API
      if (config.url && matchingUrlReGex.test(config.url)) {
        return config;
      }

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      throw new axios.Cancel("RequestConfig - No Token");
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

    // if (config.url && config.url.includes("jds") && accessTokenData) {
    //   return {
    //     ...config,
    //     headers: {
    //       "x-access-token": accessTokenData,
    //     },
    //   };
    // }

    return {
      ...config,
      headers: {
        "x-access-token": accessTokenData,
      },
    };
  };

  const responseErrorHandler = async (error: AxiosError<ErrorResponseDef>) => {
    if (error.response?.data.error_code === "EXPIRED_JWT") {
      await getNewAccessToken();
    }

    if (error.response?.data.error_code === "MALFORMED_JWT") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return Promise.resolve();
    }

    if (error.response?.data.error_code === "EMPTY_JWT_REDIS") {
      return Promise.resolve();
    }

    return Promise.reject(error);
  };

  const requestInterceptor = axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return requestConfigHandler(config);
    },

    (error) => {
      return Promise.reject(error);
    }
  );

  const responseInterceptor = axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return responseErrorHandler(error);
    }
  );

  useEffect(() => {
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);
};
