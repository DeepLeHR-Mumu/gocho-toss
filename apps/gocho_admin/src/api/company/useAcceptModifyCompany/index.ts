import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { AcceptModifyCompanyDef, RequestObjDef, UseAcceptModifyCompanyProps } from "./type";

const putAcceptModifyCompany: AcceptModifyCompanyDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/companies/${requestObj.companyId}/requests/modify-accept`);
  return data;
};

export const useAcceptModifyCompany: UseAcceptModifyCompanyProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: putAcceptModifyCompany });
