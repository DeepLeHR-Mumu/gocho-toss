import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { AdminResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { RequestObjDef, PostSearchKeywordDef, useAddSearchKeywordProps } from "./type";

export const postAddSearchKeyword: PostSearchKeywordDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/keywords/search", requestObj);
  return data;
};

export const useAddSearchKeyword: useAddSearchKeywordProps = () =>
  useMutation<AdminResponseDef, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: postAddSearchKeyword });
