import { AxiosResponse, AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { DeleteSearchKeywordDef, RequestObjDef, useDeleteSearchKeywordProps } from "./type";

export const deleteSearchKeyword: DeleteSearchKeywordDef = async (requestObj) => {
  const { data } = await axiosInstance.delete("/keywords/search", { data: { keyword: requestObj.keyword } });
  return data;
};

export const useDeleteSearchKeyword: useDeleteSearchKeywordProps = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: deleteSearchKeyword });
