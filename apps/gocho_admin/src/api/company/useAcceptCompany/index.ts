import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/useAxiosInterceptor";

import { AcceptCompanyDef, RequestObjDef, UseAcceptCompanyProps } from "./type";

const putAcceptCompany: AcceptCompanyDef = async (requestObj) => {
  const { data } = await axiosInstance.put(
    `/companies/${requestObj.companyId}/requests/accept?type=${requestObj.type}`
  );
  return data;
};

export const useAcceptCompany: UseAcceptCompanyProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: putAcceptCompany });
};
