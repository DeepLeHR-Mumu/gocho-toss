import { useQuery } from "@tanstack/react-query";

import {
  companyDetailKeyObj,
  CompanyDetailRequestDef,
} from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";

import { axiosNewInstance } from "../../axiosInstance";
import { GetCompanyDetailDef } from "./type";
import { selector } from "./util";

export const getCompanyDetail: GetCompanyDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNewInstance.get(`/companies/${requestObj.companyId}`);
  return data;
};

export const useCompanyDetail = (requestObj: CompanyDetailRequestDef) => {
  const queryResult = useQuery({
    queryKey: companyDetailKeyObj.detail(requestObj),
    queryFn: getCompanyDetail,
    staleTime: Infinity,
    enabled: Boolean(requestObj.companyId),
    select: ({ data }) => {
      return selector(data);
    },
  });
  return queryResult;
};
