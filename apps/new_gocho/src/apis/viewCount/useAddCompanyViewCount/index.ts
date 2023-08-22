import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { axiosInstance } from "../../axiosInstance";
import { RequestObjDef, AddCompanyViewCountDef, UseAddCompanyViewCountProps } from "./type";

const addCompanyViewCount: AddCompanyViewCountDef = async (requestObj) => {
  const { data } = await axiosInstance.post(`/companies/${requestObj.companyId}/views`, null);
  return data;
};

export const useAddCompanyViewCount: UseAddCompanyViewCountProps = () => {
  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: addCompanyViewCount,
  });
};
