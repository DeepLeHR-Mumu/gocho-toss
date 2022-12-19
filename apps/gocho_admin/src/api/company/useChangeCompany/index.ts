import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/useAxiosInterceptor";
import { ChangeCompanyDef, useChangeCompanyProps, RequestObjDef } from "./type";

export const changeCompany: ChangeCompanyDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/companies/${requestObj.companyId}`, requestObj, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useChangeCompany: useChangeCompanyProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(changeCompany);
  return mutationResult;
};
