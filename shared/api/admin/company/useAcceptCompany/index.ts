import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "../../axiosInstance";

import { UseAcceptCompanyProps, AcceptCompanyDef, RequestObjDef } from "./type";

const AcceptCompany: AcceptCompanyDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/companies/${requestObj.companyId}/requests/accept`, {
    type: requestObj.type,
  });
  return data;
};

export const useAcceptCompany: UseAcceptCompanyProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(AcceptCompany);
  return mutationResult;
};
