import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { AcceptModifyCompanyDef, RequestObjDef, UseAcceptModifyCompanyProps } from "./type";

const putAcceptModifyCompany: AcceptModifyCompanyDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/companies/${requestObj.companyId}/requests/modify-accept`);
  return data;
};

export const useAcceptModifyCompany: UseAcceptModifyCompanyProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: putAcceptModifyCompany });
