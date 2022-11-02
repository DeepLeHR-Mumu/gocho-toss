import { useQuery } from "@tanstack/react-query";
import { CompanyArrRequestDef, companyArrKeyObj } from "shared-constant/queryKeyFactory/company/arrKeyObj";

import { axiosInstance } from "../../axiosInstance";

import { GetCompanyArrDef } from "./type";
import { selector } from "./util";

export const getCompanyArr: GetCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies`, { params: requestObj });
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
