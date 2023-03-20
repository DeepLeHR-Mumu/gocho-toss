import { useQuery } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "@/api/useAxiosInterceptor";

import { companyDetailKeyObj, GetCompanyDetailDef, RequestObjDef } from "./type";
import { companyDetailConverter } from "./util";

export const getCompanyDetail: GetCompanyDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/companies/${requestObj.companyId}`);
  return data;
};

export const useCompanyDetail = (requestObj: RequestObjDef) =>
  useQuery({
    queryKey: companyDetailKeyObj.detail(requestObj),
    queryFn: getCompanyDetail,
    enabled: Boolean(requestObj.companyId),
    select: (data) => companyDetailConverter(data),
  });
