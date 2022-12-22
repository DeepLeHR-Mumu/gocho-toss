import { useMutation } from "@tanstack/react-query";

import { AxiosError, AxiosResponse } from "axios";
import { tokenService } from "@/utils/tokenService";

import { axiosNoTokenInstance } from "../../useIsRefreshLock";
import { PostLogoutDef } from "./type";
import { ErrorResponseDef } from "@/types/errorType";

const postLogout: PostLogoutDef = async () => {
  const refreshToken = tokenService.getRefreshToken();
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

export const useDoLogout = () => useMutation<AxiosResponse | AxiosError<ErrorResponseDef>>(postLogout);
