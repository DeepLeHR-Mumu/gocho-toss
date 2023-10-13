import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { PostAuthRejectDef, RequestObjDef, useAuthRejectProps } from "./type";

export const postAuthReject: PostAuthRejectDef = async (requestObj) => {
  const { data } = await axiosInstance.post(`/managers/${requestObj.managerId}/requests/auth-reject`, {
    reason: requestObj.reason,
  });
  return data;
};

export const useAuthReject: useAuthRejectProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: postAuthReject });
