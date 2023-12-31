import { useEffect } from "react";
import { useRouter } from "next/router";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import dayjs from "dayjs";

import { BUSINESS_BACKEND_URL } from "shared-constant";
import { managerTokenDecryptor } from "shared-util";
import { ErrorResponseDef } from "shared-type/api";

import { useModal } from "@/globalStates";
import { INTERNAL_URL } from "@/constants";

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
  let isRefreshing = false;
  let refreshSubscribers: (() => void)[] = [];

  const { setModal } = useModal();

  const subscribeTokenRefresh = (cb: () => void) => {
    refreshSubscribers.push(cb);
  };

  const onRefreshed = () => {
    refreshSubscribers.map((cb) => cb());
    refreshSubscribers = [];
  };

  // accessToken이 만료 된 경우 refresh api를 호출하여 access, refresh 토큰을 재발급 받는 함수
  const getNewAccessToken = async (): Promise<string> => {
    if (!isRefreshing) {
      isRefreshing = true;
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) throw new axios.Cancel("요청 취소");

      axios
        .get(`${BUSINESS_BACKEND_URL}/auth/refresh`, {
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
          switch (error_code) {
            case "EMPTY_JWT":
            case "BLANK_MEMBER":
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
              router.push(INTERNAL_URL.LOGIN);
              throw new axios.Cancel("재요청 취소");
            default:
              throw error;
          }
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

    if (!accessTokenData || !refreshTokenData) {
      throw new axios.Cancel("No Token - Access Denied");
    }

    const { exp: accessTokenExp } = managerTokenDecryptor(accessTokenData);
    const { exp: refreshTokenExp } = managerTokenDecryptor(refreshTokenData);
    const accessCreateTime = dayjs(new Date(accessTokenExp * 1000), "YYYY-MM-DDTHH:mm:ss");
    const refreshCreateTime = dayjs(new Date(refreshTokenExp * 1000), "YYYY-MM-DDTHH:mm:ss");
    const currentTime = dayjs(new Date(), "YYYY-MM-DDTHH:mm:ss");

    const isRefreshExpired = currentTime.isAfter(refreshCreateTime);
    const isAccessExpired = accessCreateTime.diff(currentTime, "ms") <= accessTokenLimitMs;

    // 1. refreshToken 만료된 경우 -> 모든 token 삭제
    if (isRefreshExpired) {
      window.alert("세션이 만료되었습니다. 재로그인 후 이용해주세요");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      router.push(INTERNAL_URL.LOGIN);
      throw new axios.Cancel("Refresh Token Expired");
    }

    // 2. accessToken 만료되었을 경우 -> 새로운 accessToken 들고 옴
    if (isAccessExpired) {
      const newToken = await getNewAccessToken();

      return {
        ...config,
        headers: {
          "x-access-token": newToken,
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
    // privateRouteLayout 컴포넌트에서 유저 토큰을 확인 하여 만약 손상된 토큰이라면 기존 토큰 삭제 후 로그인 페이지로 이동
    // URIError 발생 케이스 추가
    if (
      (error.response?.data.error_code === "MALFORMED_JWT" && error.config.url === "/auth/health-check") ||
      error.name === "URIError"
    ) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      router.push(INTERNAL_URL.LOGIN);
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

  useEffect(() => {
    const blockingRouter = () => {
      const refreshTokenData = localStorage.getItem("refreshToken");
      const prevUrl = sessionStorage.getItem("prevUrl");
      if (!refreshTokenData) return null;

      const { exp: refreshTokenExp } = managerTokenDecryptor(refreshTokenData);
      const refreshCreateTime = dayjs(new Date(refreshTokenExp * 1000), "YYYY-MM-DDTHH:mm:ss");
      const currentTime = dayjs(new Date(), "YYYY-MM-DDTHH:mm:ss");
      const isRefreshExpired = currentTime.isAfter(refreshCreateTime);

      // 사이트 사용 중 refreshToken 만료된 경우 -> 임시 로그인 창 띄움
      if (isRefreshExpired && prevUrl !== "none" && router.pathname !== INTERNAL_URL.LOGIN) {
        setModal("loginModal");
        throw router.events.emit("routeChangeError");
      }
      return null;
    };

    router.events.on("routeChangeStart", blockingRouter);
    return () => {
      router.events.off("routeChangeStart", blockingRouter);
    };
  }, [setModal, router]);

  useEffect(
    () => () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    },
    [requestInterceptor, responseInterceptor]
  );
};
