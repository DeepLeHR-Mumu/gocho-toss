import { useQuery } from "@tanstack/react-query";

import { companyDetailKeyObj, CompanyDetailRequestDef } from "@/constants/queryKeyFactory/company/companyDetailKeyObj";

import { axiosInstance, axiosNoTokenInstance } from "../../axiosInstance";
import { GetCompanyDetailDef } from "./type";
// import { selector } from "./util";

export const getCompanyDetail: GetCompanyDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const instance = requestObj.isStatic ? axiosNoTokenInstance : axiosInstance;
  const { data } = await instance.get(`/companies/${requestObj.companyId}`);
  return data;
};

export const useCompanyDetail = (requestObj: CompanyDetailRequestDef) => {
  return useQuery({
    queryKey: companyDetailKeyObj.detail(requestObj),
    queryFn: getCompanyDetail,
    staleTime: Infinity,
    enabled: Boolean(requestObj.companyId),
    select: ({ data }) => {
      return data;
    },
  });
};
