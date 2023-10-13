import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { PostAuthRejectDef, RequestObjDef, useAuthRejectProps } from "./type";

export const postAuthReject: PostAuthRejectDef = async (requestObj) => {
  const { data } = await axiosInstance.post(`/managers/${requestObj.managerId}/requests/auth-reject`, {
    reason: requestObj.reason,
  });
  return data;
};

export const useAuthReject: useAuthRejectProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: postAuthReject });
