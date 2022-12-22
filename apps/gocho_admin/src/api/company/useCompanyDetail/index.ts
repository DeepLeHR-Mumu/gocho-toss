import { useQuery } from "@tanstack/react-query";

import {
  companyDetailKeyObj,
  CompanyDetailRequestDef,
} from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";
import { axiosNoTokenInstance } from "@api/useAxiosInterceptor";

import { GetCompanyDetailDef } from "./type";
import { companyConverter } from "./util";

export const getCompanyDetail: GetCompanyDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/companies/${requestObj.companyId}`);
  return data;
};

export const useCompanyDetail = (requestObj: CompanyDetailRequestDef) => {
  const queryResult = useQuery(companyDetailKeyObj.detail(requestObj), getCompanyDetail, {
    enabled: Boolean(requestObj.companyId),
    select: (data) => {
      return companyConverter(data);
    },
  });

  return queryResult;
};
