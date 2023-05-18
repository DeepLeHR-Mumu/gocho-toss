import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { RejectModifyCompanyDef, RequestObjDef, UseRejectModifyCompanyProps } from "./type";

const patchRejectModifyCompany: RejectModifyCompanyDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/companies/${requestObj.companyId}/requests/modify-reject`, {
    reason: requestObj.reason,
  });
  return data;
};

export const useRejectModifyCompany: UseRejectModifyCompanyProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: patchRejectModifyCompany });
