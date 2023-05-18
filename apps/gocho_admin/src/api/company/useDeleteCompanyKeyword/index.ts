import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { ErrorResponseDef } from "@/types";
import { DeleteCompanyKeywordDef, RequestObjDef, useDeleteCompanyKeywordProps } from "./type";

export const deleteCompanyKeyword: DeleteCompanyKeywordDef = async (requestObj) => {
  const { data } = await axiosInstance.delete("/keywords/company", { data: { keyword: requestObj.keyword } });
  return data;
};

export const useDeleteCompanyKeyword: useDeleteCompanyKeywordProps = () =>
  useMutation<AdminResponseDef, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: deleteCompanyKeyword });
