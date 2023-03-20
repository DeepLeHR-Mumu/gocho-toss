import { useQuery } from "@tanstack/react-query";

import {
  companyDetailKeyObj,
  CompanyDetailRequestDef,
} from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";

import { axiosNoTokenInstance } from "../../axiosInstance";
import { GetCompanyDetailDef } from "./type";
import { selector } from "./util";

export const getCompanyDetail: GetCompanyDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/companies/${requestObj.companyId}`);
  return data;
};

export const useCompanyDetail = (requestObj: CompanyDetailRequestDef) => {
  return useQuery({
    queryKey: companyDetailKeyObj.detail(requestObj),
    queryFn: getCompanyDetail,
    staleTime: Infinity,
    enabled: Boolean(requestObj.companyId),
    select: ({ data }) => {
      return selector(data);
    },
  });
};
