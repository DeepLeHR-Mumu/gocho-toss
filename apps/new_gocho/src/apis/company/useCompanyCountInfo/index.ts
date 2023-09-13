import { useQuery } from "@tanstack/react-query";

import {
  companyCountInfoKeyObj,
  CompanyCountInfoRequestObjDef,
} from "@/constants/queryKeyFactory/company/companyCountInfoKeyObj";

import { axiosNoTokenInstance } from "../../axiosInstance";
import { selector } from "./util";
import { GetCompanyCountInfoDef } from "./type";

export const getCompanyCountInfo: GetCompanyCountInfoDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/companies/${requestObj.id}/count-info`);
  return data;
};

export const useCompanyCountInfo = (requestObj: CompanyCountInfoRequestObjDef) => useQuery({
    queryKey: companyCountInfoKeyObj.countInfo(requestObj),
    queryFn: getCompanyCountInfo,
    enabled: Boolean(requestObj.id),
    select: (data) => selector(data),
  });
