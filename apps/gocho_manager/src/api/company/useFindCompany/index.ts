import { useQuery } from "@tanstack/react-query";
import { CompanyArrRequestDef, companyArrKeyObj } from "shared-constant/queryKeyFactory/company/arrKeyObj";

import { axiosNoTokenInstance } from "@api/axiosInstance";

import { GetCompanyArrDef } from "./type";
import { selector } from "./util";

export const getFindCompany: GetCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/companies/find/name`, {
    params: requestObj,
  });
  return data;
};

export const useFindCompany = (requestObj: CompanyArrRequestDef) => {
  const queryResult = useQuery(companyArrKeyObj.companyArr(requestObj), getFindCompany, {
    select: ({ data, count }) => {
      return selector(data, count);
    },
  });
  return queryResult;
};
