import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types/errorType";

import { axiosNoTokenInstance } from "../../useIsRefreshLock";
import { PostLogoutDef } from "./type";

const postLogout: PostLogoutDef = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) throw new axios.Cancel("로그아웃 요청 취소");
  const { data } = await axiosNoTokenInstance.post(
    "/auth/logout",
    {},
    {
      headers: {
        "x-refresh-token": refreshToken,
      },
    }
  );
  return data;
};

export const useDoLogout = () => useMutation<AxiosResponse, AxiosError<ErrorResponseDef>>(postLogout);
