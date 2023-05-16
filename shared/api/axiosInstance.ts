import { useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import dayjs from "dayjs";
import { BACKEND_URL, MANAGER_BACKEND_URL } from "shared-constant";
import { tokenDecryptor } from "shared-util";

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
  let isRequestLock = false;
  let readyQueueArr: ((token: string) => void)[] = [];

  const saveQueue = (callback: (token: string) => void) => {
    return readyQueueArr.push(callback);
  };
  const activeQueue = (token: string) => {
    return readyQueueArr.forEach((callback) => {
      return callback(token);
    });
  };

  // accessToken이 만료 된 경우 refresh 함수를 호출하여 access, refreshToken 재발급 받는 함수
  const getRefreshTokenCreator = async (): Promise<{ newToken: string } | void> => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) throw new axios.Cancel("요청 취소");

    return axios
      .get(`${BACKEND_URL}/auth/refresh`, {
        headers: { "x-refresh-token": refreshToken },
      })
      .then(({ data }) => {
        localStorage.setItem("accessToken", data.data.access_token);
        localStorage.setItem("refreshToken", data.data.refresh_token);
        // interceptor request 안에서 accessToken 만료된 이후 저장된 api 큐를 실행
        activeQueue(data.data.access_token);
      })
      .catch((error) => {
        const { error_code } = error.response.data;
        if (error_code === "EMPTY_JWT") {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          throw new axios.Cancel("재요청 취소");
        }
      })
      .finally(() => {
        isRequestLock = false;
        readyQueueArr = [];
      });
  };

  const requestConfigHandler = async (config: AxiosRequestConfig) => {
    const accessTokenData = localStorage.getItem("accessToken");
    const refreshTokenData = localStorage.getItem("refreshToken");
    const matchingUrlReGex = /^(?!.*comments).*\b(companies|jds)\b.*$/i;

    // 비로그인상황에서 공고와 컴퍼니 정보는 일단 request는 요청한다.
    if (!accessTokenData && config.url && matchingUrlReGex.test(config.url)) {
      return config;
    }

    // 0. token 없는 경우
    if (!accessTokenData || !refreshTokenData) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      throw new axios.Cancel("로그인하지 않은 상태");
    }

    const { exp: accessTokenExp } = tokenDecryptor(accessTokenData);
    const { exp: refreshTokenExp } = tokenDecryptor(refreshTokenData);
    const accessCreateTime = dayjs(new Date(accessTokenExp * 1000), "YYYY-MM-DDTHH:mm:ss");
    const refreshCreateTime = dayjs(new Date(refreshTokenExp * 1000), "YYYY-MM-DDTHH:mm:ss");
    const currentTime = dayjs(new Date(), "YYYY-MM-DDTHH:mm:ss");
    const accessBetweenCurrentDiffTime = accessCreateTime.diff(currentTime, "ms");
    const isRefreshAfterCurrentTime = currentTime.isAfter(refreshCreateTime);

    // 1. refreshToken 만료된 경우 -> 모든 token 삭제
    if (isRefreshAfterCurrentTime) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      throw new axios.Cancel("refreshToken 만료");
    }

    // 2. accessToken 만료된 이후 처음으로 실행될 코드
    if (accessBetweenCurrentDiffTime <= accessTokenLimitMs && !isRequestLock) {
      isRequestLock = true;
      await getRefreshTokenCreator();
      const accessToken = localStorage.getItem("accessToken");
      return {
        ...config,
        headers: {
          "x-access-token": accessToken,
        },
      };
    }

    // accessToken 만료된 이후 2번 call 이후 다음 진행될 api들을 saveQueue에 저장
    if (accessBetweenCurrentDiffTime <= accessTokenLimitMs && isRequestLock) {
      return new Promise(() => {
        saveQueue((accessToken) => {
          axiosInstance({ ...config, headers: { "x-access-token": accessToken } });
        });
      });
    }

    // 그 외 아무 이상 없는 경우 리턴값
    return {
      ...config,
      headers: {
        "x-access-token": accessTokenData,
      },
    };
  };

  const requestInterceptor = axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return requestConfigHandler(config);
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [requestInterceptor]);
};

export const axiosManagerInstance = axios.create({
  timeout: 10000,
  baseURL: MANAGER_BACKEND_URL,
});
