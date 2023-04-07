import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { DeleteCompanyKeywordDef, RequestObjDef, useDeleteCompanyKeywordProps } from "./type";

export const deleteCompanyKeyword: DeleteCompanyKeywordDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/companies/keywords?keyword=${requestObj.keyword}`);
  return data;
};

export const useDeleteCompanyKeyword: useDeleteCompanyKeywordProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: deleteCompanyKeyword });
