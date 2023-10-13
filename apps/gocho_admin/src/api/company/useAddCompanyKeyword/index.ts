import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

import { ErrorResponseDef } from "shared-type/api";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { RequestObjDef, PostCompanyKeywordDef, useAddCompanyKeywordProps } from "./type";

export const postAddCompanyKeyword: PostCompanyKeywordDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/keywords/company", requestObj);
  return data;
};

export const useAddCompanyKeyword: useAddCompanyKeywordProps = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: postAddCompanyKeyword });
