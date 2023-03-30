import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { GetEditCompanyRequestDef, RequestObjDef, companyDetailRequestKeyObj } from "./type";
import { companyDetailEditSelector } from "./util";

export const getEditCompanyRequest: GetEditCompanyRequestDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}/requests`);
  return data;
};

export const useEditCompanyRequest = (requestObj: RequestObjDef) =>
  useQuery({
    queryKey: companyDetailRequestKeyObj.detail(requestObj),
    queryFn: getEditCompanyRequest,
    enabled: Boolean(requestObj.companyId),
    select: (data) => companyDetailEditSelector(data),
  });
