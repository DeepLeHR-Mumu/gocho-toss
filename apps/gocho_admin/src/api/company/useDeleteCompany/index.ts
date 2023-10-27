import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { DeleteCompanyDef, RequestObjDef, useDeleteCompanyProps } from "./type";

export const deleteCompany: DeleteCompanyDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/companies/${requestObj.companyId}`);
  return data;
};

export const useDeleteCompany: useDeleteCompanyProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: deleteCompany });
