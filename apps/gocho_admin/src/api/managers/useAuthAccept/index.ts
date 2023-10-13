import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { PostAuthAcceptDef, RequestObjDef, useAuthAcceptProps } from "./type";

export const postAuthAccept: PostAuthAcceptDef = async (requestObj) => {
  const { data } = await axiosInstance.post(`/managers/${requestObj.managerId}/requests/auth-accept`);
  return data;
};

export const useAuthAccept: useAuthAcceptProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: postAuthAccept });
