import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

import { ErrorResponseDef } from "shared-type/api";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { RequestObjDef, PostSearchKeywordDef, useAddSearchKeywordProps } from "./type";

export const postAddSearchKeyword: PostSearchKeywordDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/keywords/search", requestObj);
  return data;
};

export const useAddSearchKeyword: useAddSearchKeywordProps = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: postAddSearchKeyword });
