import { AxiosResponse, AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { DeleteCompanyKeywordDef, RequestObjDef, useDeleteCompanyKeywordProps } from "./type";

export const deleteCompanyKeyword: DeleteCompanyKeywordDef = async (requestObj) => {
  const { data } = await axiosInstance.delete("/keywords/company", { data: { keyword: requestObj.keyword } });
  return data;
};

export const useDeleteCompanyKeyword: useDeleteCompanyKeywordProps = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: deleteCompanyKeyword });
