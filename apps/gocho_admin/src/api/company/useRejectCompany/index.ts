import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/axiosInstance";

import { RejectCompanyDef, RequestObjDef, UseRejectCompanyProps } from "./type";

const patchRejectCompany: RejectCompanyDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/companies/${requestObj.companyId}/requests/reject`, {
    type: requestObj.type,
  });
  return data;
};

export const useRejectCompany: UseRejectCompanyProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>(patchRejectCompany);
};
