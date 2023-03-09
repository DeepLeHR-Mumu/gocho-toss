import { useQuery } from "@tanstack/react-query";

import {
  CompanyCountInfoRequestObjDef,
  companyCountInfoKeyObj,
} from "shared-constant/queryKeyFactory/company/companyCountInfoKeyObj";

import { axiosNoTokenInstance } from "../../axiosInstance";
import { selector } from "./util";
import { GetCompanyCountInfoDef } from "./type";

export const getCompanyCountInfo: GetCompanyCountInfoDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/companies/${requestObj.id}/count-info`);
  return data;
};

export const useCompanyCountInfo = (requestObj: CompanyCountInfoRequestObjDef) => {
  const queryResult = useQuery({
    queryKey: companyCountInfoKeyObj.countInfo(requestObj),
    queryFn: getCompanyCountInfo,
    enabled: Boolean(requestObj.id),
    select: (data) => {
      return selector(data);
    },
  });

  return queryResult;
};
