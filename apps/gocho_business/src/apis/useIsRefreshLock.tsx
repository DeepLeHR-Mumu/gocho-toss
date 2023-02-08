import { useEffect } from "react";
import { useRouter } from "next/router";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import dayjs from "dayjs";

import { BUSINESS_BACKEND_URL } from "shared-constant/externalURL";
import { managerTokenDecryptor } from "shared-util/tokenDecryptor";

import { useModal } from "@/globalStates/useModal";
import { INTERNAL_URL } from "@/constants/url";
import { useUserState } from "@/globalStates/useUserState";
import { ErrorResponseDef } from "@/types/errorType";

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
  let isRequestLock = false;
  let readyQueueArr: ((token: string) => void)[] = [];

  const { setCurrentModal } = useModal();
  const saveQueue = (callback: (token: string) => void) => readyQueueArr.push(callback);
  const activeQueue = (token: string) => readyQueueArr.forEach((callback) => callback(token));

  const { setUserInfoData } = useUserState();

  const getRefreshTokenCreator = async (): Promise<{ newToken: string } | void> => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) throw new axios.Cancel("요청 취소");

    const refreshResults = await axios
      .get(`${BUSINESS_BACKEND_URL}/auth/refresh`, {
        headers: { "x-refresh-token": refreshToken },
      })
      .then(({ data }) => {
        localStorage.setItem("accessToken", data.data.access_token);
        localStorage.setItem("refreshToken", data.data.refresh_token);
        activeQueue(data.data.access_token);
      })
      .catch((error) => {
        const { error_code } = error.response.data;
        if (error_code === "EMPTY_JWT") {
          throw new axios.Cancel("재요청 취소");
        }
      })
      .finally(() => {
        isRequestLock = false;
        readyQueueArr = [];
      });

    return refreshResults;
  };

  const requestConfigHandler = async (config: AxiosRequestConfig) => {
    const accessTokenData = localStorage.getItem("accessToken");
    const refreshTokenData = localStorage.getItem("refreshToken");
    const prevUrl = sessionStorage.getItem("prevUrl");
    const firstEntryDate = sessionStorage.getItem("firstEntryDate");

    if ((!accessTokenData || !refreshTokenData) && config.url === "/auth/health-check") {
      throw new axios.Cancel("비로그인 health-check 취소");
    }
    if (!accessTokenData || !refreshTokenData) return router.replace(INTERNAL_URL.LOGIN);

    const { exp: accessTokenExp } = managerTokenDecryptor(accessTokenData);
    const { exp: refreshTokenExp } = managerTokenDecryptor(refreshTokenData);
    const accessCreateTime = dayjs(new Date(accessTokenExp * 1000), "YYYY-MM-DD HH:mm:ss.SSS");
    const refreshCreateTime = dayjs(new Date(refreshTokenExp * 1000), "YYYY-MM-DD HH:mm:ss.SSS");
    const currentTime = dayjs(new Date(), "YYYY-MM-DD HH:mm:ss.SSS");
    const firstEntryTime = dayjs(new Date(Number(firstEntryDate)), "YYYY-MM-DD HH:mm:ss.SSS");
    const accessBetweenCurrentDiffTime = accessCreateTime.diff(currentTime, "ms");
    const isRefreshAfterCurrentTime = currentTime.isAfter(refreshCreateTime);
    const isRefreshAfterFirstEntryTime = firstEntryTime.isAfter(refreshCreateTime);

    console.log("out", isRefreshAfterFirstEntryTime);
    console.log(refreshCreateTime);

    setInterval(() => {
      console.log("sss", isRefreshAfterFirstEntryTime);
    }, 1000);

    if ((isRefreshAfterCurrentTime && prevUrl === "none") || isRefreshAfterFirstEntryTime) {
      console.log("in", isRefreshAfterFirstEntryTime);
      window.alert("토큰이 만료되어 로그인 페이지로 이동합니다.");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      sessionStorage.removeItem("firstEntryDate");
      setUserInfoData(null);
      router.push(INTERNAL_URL.LOGIN);
      throw new axios.Cancel("리프래시 토큰 만료로 인한 강제 로그인페이지 이동");
    }

    if (isRefreshAfterCurrentTime && prevUrl !== "none" && router.pathname !== INTERNAL_URL.LOGIN) {
      console.log("none", isRefreshAfterFirstEntryTime);
      setCurrentModal("loginModal");
      throw new axios.Cancel("리프래시 토큰 만료로 인한 요청취소");
    }

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

    if (accessBetweenCurrentDiffTime <= accessTokenLimitMs && isRequestLock) {
      return new Promise(() => {
        saveQueue((accessToken) => {
          axiosInstance({ ...config, headers: { "x-access-token": accessToken } });
        });
      });
    }

    return {
      ...config,
      headers: {
        "x-access-token": accessTokenData,
      },
    };
  };

  const responseErrorHandler = async (error: AxiosError<ErrorResponseDef>) => {
    if (error.response?.data.error_code === "MALFORMED_JWT" && error.config.url === "/auth/health-check") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      router.push(INTERNAL_URL.LOGIN);
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

  useEffect(() => {
    console.log("axios start");
    axiosInstance.interceptors.request.eject(requestInterceptor);
    axiosInstance.interceptors.response.eject(responseInterceptor);

    return () => {
      console.log("axios end");
    };
  }, [requestInterceptor, responseInterceptor]);
};
