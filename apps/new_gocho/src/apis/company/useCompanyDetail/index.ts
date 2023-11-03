import { useQuery } from "@tanstack/react-query";

import { BACKEND_URL } from "shared-constant";

import { companyDetailKeyObj, CompanyDetailRequestDef } from "@/constants/queryKeyFactory/company/companyDetailKeyObj";

import { axiosInstance, axiosNoTokenInstance } from "../../axiosInstance";
import { GetCompanyDetailDef } from "./type";
// import { selector } from "./util";

export const getCompanyDetail: GetCompanyDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const [BACKEND_URL_WITHOUT_VERSION] = BACKEND_URL.split("/v1");
  const instance = requestObj.isStatic ? axiosNoTokenInstance : axiosInstance;
  const { data } = await instance.get(`${BACKEND_URL_WITHOUT_VERSION}/v2/companies/${requestObj.companyId}`);
  return data;
};

export const useCompanyDetail = (requestObj: CompanyDetailRequestDef) =>
  useQuery({
    queryKey: companyDetailKeyObj.detail(requestObj),
    queryFn: getCompanyDetail,
    staleTime: Infinity,
    enabled: Boolean(requestObj.companyId),
    select: ({ data }) => data,
  });
