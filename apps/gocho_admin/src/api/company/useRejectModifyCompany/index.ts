import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { RejectModifyCompanyDef, RequestObjDef, UseRejectModifyCompanyProps } from "./type";

const patchRejectModifyCompany: RejectModifyCompanyDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/companies/${requestObj.companyId}/requests/modify-reject`, {
    reason: requestObj.reason,
  });
  return data;
};

export const useRejectModifyCompany: UseRejectModifyCompanyProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: patchRejectModifyCompany });
