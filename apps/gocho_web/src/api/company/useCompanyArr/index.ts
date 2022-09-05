import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";
import { CompanyArrRequestDef, companyArrKeyObj } from "@constant/queryKeyFactory/company/arrKeyObj";

import { GetCompanyArrDef } from "./type";
import { selector } from "./util";

export const getCompanyArr: GetCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies`, {
    params: requestObj,
  });
  return data;
};

export const useCompanyArr = (requestObj: CompanyArrRequestDef) => {
  const queryResult = useQuery(companyArrKeyObj.companyArr(requestObj), getCompanyArr, {
    select: ({ data, count }) => {
      return selector(data, count);
    },
  });
  return queryResult;
};
