import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { PostAuthAcceptDef, RequestObjDef, useAuthAcceptProps } from "./type";

export const postAuthAccept: PostAuthAcceptDef = async (requestObj) => {
  const { data } = await axiosInstance.post(`/managers/${requestObj.managerId}/requests/auth-accept`);
  return data;
};

export const useAuthAccept: useAuthAcceptProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: postAuthAccept });
