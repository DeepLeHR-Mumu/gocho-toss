import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types/errorType";

import { axiosNoTokenInstance } from "../../useIsRefreshLock";
import { PostLoginDef, RequestObjDef, ResponseObjDef } from "./type";

const postLogin: PostLoginDef = async (requestObj) => {
  const { data } = await axiosNoTokenInstance.post("/auth/login", { ...requestObj });
  return data;
};

export const useDoLogin = () =>
  useMutation<AxiosResponse<ResponseObjDef>, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: postLogin });
