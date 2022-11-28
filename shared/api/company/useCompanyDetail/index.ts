import { useQuery } from "@tanstack/react-query";

import {
  companyDetailKeyObj,
  CompanyDetailKeyObjDef,
} from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetCompanyDetailDef } from "./type";
import { companyConverter } from "./util";

export const getCompanyDetail: GetCompanyDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}`);
  return data;
};

export const useCompanyDetail = (requestObj: CompanyDetailKeyObjDef) => {
  const queryResult = useQuery(companyDetailKeyObj.detail(requestObj), getCompanyDetail, {
    staleTime: Infinity,
    enabled: Boolean(requestObj.companyId),
    select: ({ data }) => {
      return companyConverter(data);
    },
  });
  return queryResult;
};
