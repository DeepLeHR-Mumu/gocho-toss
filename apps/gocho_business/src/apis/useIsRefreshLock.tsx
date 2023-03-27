import { useEffect } from "react";
import { useRouter } from "next/router";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import dayjs from "dayjs";

import { BUSINESS_BACKEND_URL } from "shared-constant";
import { managerTokenDecryptor } from "shared-util";

import { useModal, useUserState } from "@/globalStates";
import { INTERNAL_URL } from "@/constants";
import { ErrorResponseDef } from "@/types";

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
  const { setUserInfoData } = useUserState();
  const saveQueue = (callback: (token: string) => void) => readyQueueArr.push(callback);
  const activeQueue = (token: string) => readyQueueArr.forEach((callback) => callback(token));

  // 어세스토큰이 만료 된 경우 refresh api를 호출하여 access, refresh 토큰을 재발급 받는 함수
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
        // interceptor request안에서 어세스토큰이 만료된 이후 저장된 api 큐를 실행
        activeQueue(data.data.access_token);
      })
      .catch((error) => {
        const { error_code } = error.response.data;
        if (error_code === "EMPTY_JWT") {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          setUserInfoData(null);
          router.push(INTERNAL_URL.LOGIN);
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

    if (!accessTokenData || !refreshTokenData) {
      router.replace(INTERNAL_URL.LOGIN);
      throw new axios.Cancel("토큰이 존재하지 않으므로 요청취소");
    }

    const { exp: accessTokenExp } = managerTokenDecryptor(accessTokenData);
    const { exp: refreshTokenExp } = managerTokenDecryptor(refreshTokenData);
    const accessCreateTime = dayjs(new Date(accessTokenExp * 1000), "YYYY-MM-DD HH:mm:ss.SSS");
    const refreshCreateTime = dayjs(new Date(refreshTokenExp * 1000), "YYYY-MM-DD HH:mm:ss.SSS");
    const currentTime = dayjs(new Date(), "YYYY-MM-DD HH:mm:ss.SSS");
    const accessBetweenCurrentDiffTime = accessCreateTime.diff(currentTime, "ms");
    const isRefreshAfterCurrentTime = currentTime.isAfter(refreshCreateTime);

    // 1. 리프래시토큰이 만료된 경우
    if (isRefreshAfterCurrentTime) {
      window.alert("세션이 만료되었습니다. 재로그인 후 이용해주세요");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setUserInfoData(null);
      router.push(INTERNAL_URL.LOGIN);
      throw new axios.Cancel("리프래시 토큰 만료로 인한 강제 로그인페이지 이동");
    }

    // 2. 어세스토큰이 만료된 이후 처음으로 실행될 코드
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

    // 어세스토큰이 만료된 이후 2번 call 이후 다음 진행될 api들을 saveQueue에 저장
    if (accessBetweenCurrentDiffTime <= accessTokenLimitMs && isRequestLock) {
      return new Promise(() => {
        saveQueue((accessToken) => {
          axiosInstance({ ...config, headers: { "x-access-token": accessToken } });
        });
      });
    }

    // 그 외 아무이상 없는 경우 리턴값
    return {
      ...config,
      headers: {
        "x-access-token": accessTokenData,
      },
    };
  };

  const responseErrorHandler = async (error: AxiosError<ErrorResponseDef>) => {
    // privateRouteLayout 컴포넌트에서 유저 토큰을 확인 하여 만약 손상된 토큰이라면 기존 토큰 삭제 후 로그인 페이지로 이동
    if (error.response?.data.error_code === "MALFORMED_JWT" && error.config.url === "/auth/health-check") {
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
      const refreshCreateTime = dayjs(new Date(refreshTokenExp * 1000), "YYYY-MM-DD HH:mm:ss.SSS");
      const currentTime = dayjs(new Date(), "YYYY-MM-DD HH:mm:ss.SSS");
      const isRefreshAfterCurrentTime = currentTime.isAfter(refreshCreateTime);

      // 이전페이지가 존재하고(사이트 사용중) 리프래시 토큰이 만료된 경우 route를 캔슬하고 로그인 모달을 출력한다.
      if (isRefreshAfterCurrentTime && prevUrl !== "none" && router.pathname !== INTERNAL_URL.LOGIN) {
        setCurrentModal("loginModal");
        throw router.events.emit("routeChangeError");
      }
      return null;
    };

    router.events.on("routeChangeStart", blockingRouter);
    return () => {
      router.events.off("routeChangeStart", blockingRouter);
    };
  }, [setCurrentModal, router]);

  useEffect(
    () => () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    },
    [requestInterceptor, responseInterceptor]
  );
};
