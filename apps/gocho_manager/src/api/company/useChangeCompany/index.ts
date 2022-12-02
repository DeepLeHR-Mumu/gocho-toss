import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/axiosInstance";
import { PostCompanyDef, useChangeCompanyProps, RequestObjDef } from "./type";

export const changeCompany: PostCompanyDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/companies/${requestObj.companyId}`, requestObj.dto);
  return data;
};

export const useChangeCompany: useChangeCompanyProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(changeCompany);
  return mutationResult;
};
