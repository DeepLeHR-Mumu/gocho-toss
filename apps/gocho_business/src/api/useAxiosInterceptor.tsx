import { useRouter } from "next/router";
import { useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

import { BUSINESS_BACKEND_URL } from "shared-constant/externalURL";
import { managerTokenDecryptor } from "shared-util/tokenDecryptor";

import { INTERNAL_URL } from "@/constants/index";

export interface ErrorStatus {
  error: {
    status: number;
    error_code:
      | "UNAUTHORIZED"
      | "EMPTY_JWT"
      | "INVALID_JWT"
      | "MALFORMED_JWT"
      | "EXPIRED_JWT"
      | "UNSUPPORTED_JWT"
      | "WRONG_SIGNATURE_JWT"
      | "ILLEGAL_ARGUMENT_JWT";
    error_message:
      | "인증되지 않았습니다."
      | "토큰이 존재하지 않습니다."
      | "유효하지 않은 토큰입니다."
      | "손상된 토큰입니다."
      | "만료된 토큰입니다."
      | "지원하지 않는 토큰입니다."
      | "시그니처 검증에 실패한 토큰입니다."
      | "잘못된 토큰 입력입니다.";
  }[];
}

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

  const axiosRequestInterceptorHandler = async (config: AxiosRequestConfig) => {
    let accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    // if (!accessToken || !refreshToken) {
    //   router.push(INTERNAL_URL.LOGIN, undefined, { shallow: true });
    //   return config;
    // }

    const { exp: accessExp } = managerTokenDecryptor(accessToken as string);
    const { exp: refreshExp } = managerTokenDecryptor(refreshToken as string);

    const refreshCreateTime = new Date(Number(refreshExp) * 1000).getTime();
    const accessCreateTime = new Date(Number(accessExp) * 1000).getTime();
    const currentTime = new Date().getTime();

    if (refreshCreateTime !== 0 && refreshCreateTime <= currentTime) {
      localStorage.clear();
      router.push(INTERNAL_URL.LOGIN, undefined, { shallow: true });
    }

    if (accessToken && accessCreateTime <= currentTime) {
      const { data: refreshData } = await axios.get(`${BUSINESS_BACKEND_URL}/auth/refresh`, {
        headers: { "x-refresh-token": `${refreshToken}` },
      });

      localStorage.setItem("accessToken", `${refreshData.data.access_token}`);
      localStorage.setItem("refreshToken", `${refreshData.data.refresh_token}`);
      accessToken = localStorage.getItem("accessToken");
    }

    const newConfig = config;

    if (accessToken) {
      newConfig.headers = newConfig.headers ?? {};
      newConfig.headers["x-access-token"] = `${accessToken}`;
    }

    return newConfig;
  };

  const errorHandler = async (error: AxiosError<ErrorStatus>) => {
    const errorStatus = {
      errorCode: error?.response?.data.error[0].error_code,
      errorMsg: error?.response?.data.error[0].error_message,
    };

    if (
      errorStatus.errorCode === "EMPTY_JWT" ||
      errorStatus.errorCode === "MALFORMED_JWT" ||
      errorStatus.errorCode === "UNAUTHORIZED" ||
      errorStatus.errorCode === "EXPIRED_JWT"
    ) {
      localStorage.clear();
      router.push(INTERNAL_URL.LOGIN, undefined, { shallow: true });
      return Promise.reject(errorStatus.errorCode);
    }

    return Promise.reject(error);
  };

  const requestInterceptor = axiosInstance.interceptors.request.use(
    (config) => axiosRequestInterceptorHandler(config),
    (error) => errorHandler(error)
  );

  const responseInterceptor = axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => errorHandler(error)
  );

  useEffect(
    () => () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    },
    [requestInterceptor, responseInterceptor]
  );
};
