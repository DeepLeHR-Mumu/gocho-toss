import { useQuery } from "@tanstack/react-query";
// import { CompanyArrRequestDef, companyArrKeyObj } from "shared-constant/queryKeyFactory/company/arrKeyObj";
import {
  SearchCompanyArrRequestDef,
  searchCompanyArrKeyObj,
} from "shared-constant/queryKeyFactory/company/serachCompanyArrKeyObj";

import { axiosInstance } from "../../axiosInstance";

import { GetSearchCompanyArrDef } from "./type";
import { selector } from "./util";

export const getUnifiedCompanySearchArr: GetSearchCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies`, {
    params: {
      order: "recent",
      filter: "valid",
      limit: 12,
      offset: (Number(requestObj.offset || 1) - 1) * 12,
      q: requestObj.searchWord,
    },
  });
  return data;
};

export const useUnifiedCompanySearchArr = (requestObj: SearchCompanyArrRequestDef) => {
  const queryResult = useQuery(searchCompanyArrKeyObj.searchArr(requestObj), getUnifiedCompanySearchArr, {
    select: ({ data, count }) => {
      return selector(data, count);
    },
    enabled: Number.isInteger(Number(requestObj.offset)) && typeof requestObj.searchWord !== "undefined",
  });
  return queryResult;
};
