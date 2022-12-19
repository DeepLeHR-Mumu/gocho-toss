import { useRouter } from "next/router";
import { useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

import { MANAGER_BACKEND_URL } from "shared-constant/externalURL";
import { adminTokenDecryptor } from "shared-util/tokenDecryptor";

export interface ErrorStatus {
  error: {
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
  baseURL: MANAGER_BACKEND_URL,
});

export const axiosInstance = axios.create({
  timeout: 10000,
  baseURL: MANAGER_BACKEND_URL,
});

export const useAxiosInterceptor = () => {
  const router = useRouter();

  const goToLoginPage = () => {
    localStorage.clear();
    router.push("/login", undefined, { shallow: true });
  };

  const axiosRequestInterCeptorHandler = async (config: AxiosRequestConfig) => {
    let accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const accessExp = localStorage.getItem("accessExp");
    const refreshExp = localStorage.getItem("refreshExp");

    const refreshCreateTime = new Date(Number(refreshExp) * 1000).getTime();
    const accessCreateTime = new Date(Number(accessExp) * 1000).getTime();
    const currentTime = new Date().getTime();

    if (!refreshToken || refreshCreateTime <= currentTime) {
      goToLoginPage();
    }

    if (accessToken && accessCreateTime <= currentTime) {
      const { data: refreshData } = await axios.get(`${MANAGER_BACKEND_URL}/auth/refresh`, {
        headers: { "x-refresh-token": `${refreshToken}` },
      });

      const { exp: accessNewExp } = adminTokenDecryptor(refreshData.data.access_token);
      const { exp: refreshNewExp } = adminTokenDecryptor(refreshData.data.refresh_token);
      localStorage.setItem("accessToken", `${refreshData.data.access_token}`);
      localStorage.setItem("refreshToken", `${refreshData.data.refresh_token}`);
      localStorage.setItem("accessExp", `${accessNewExp}`);
      localStorage.setItem("refreshExp", `${refreshNewExp}`);
      accessToken = localStorage.getItem("accessToken");
    }

    const newConfig = config;

    if (accessToken) {
      newConfig.headers = newConfig.headers ?? {};
      newConfig.headers["x-access-token"] = `${accessToken}`;
    }

    return newConfig;
  };

  const tokenErrorHandler = async (error: AxiosError<ErrorStatus>) => {
    const errorStatus = {
      errorCode: error?.response?.data.error[0].error_code,
      errorMsg: error?.response?.data.error[0].error_message,
    };

    if (errorStatus.errorCode === "MALFORMED_JWT") {
      // 손상된 토큰
      goToLoginPage();
    }
    if (errorStatus.errorCode === "UNAUTHORIZED") {
      // 인증되지 않음
      goToLoginPage();
    }
    if (errorStatus.errorCode === "EXPIRED_JWT") {
      // 만료된 토큰
      goToLoginPage();
    }

    return Promise.reject(error);
  };

  const requestInterceptor = axiosInstance.interceptors.request.use((config) => {
    return axiosRequestInterCeptorHandler(config);
  });

  const responseInterceptor = axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return tokenErrorHandler(error);
    }
  );

  useEffect(() => {
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);
};
