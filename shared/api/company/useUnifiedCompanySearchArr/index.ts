import { useQuery } from "@tanstack/react-query";
import {
  SearchCompanyArrRequestDef,
  searchCompanyArrKeyObj,
} from "shared-constant/queryKeyFactory/company/searchCompanyArrKeyObj";

import { axiosInstance } from "../../axiosInstance";

import { GetSearchCompanyArrDef } from "./type";
import { selector } from "./util";

export const getUnifiedCompanySearchArr: GetSearchCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies`, {
    params: {
      order: "recent",
      filter: "valid",
      limit: requestObj.limit,
      offset: ((Number(requestObj.page) || 1) - 1) * requestObj.limit,
      q: requestObj.searchWord,
    },
  });
  return data;
};

export const useUnifiedCompanySearchArr = (requestObj: SearchCompanyArrRequestDef) => {
  const queryResult = useQuery({
    queryKey: searchCompanyArrKeyObj.searchArr(requestObj),
    queryFn: getUnifiedCompanySearchArr,
    select: ({ data, count }) => {
      return selector(data, count);
    },
    enabled: Number.isInteger(Number(requestObj.page)) && typeof requestObj.searchWord !== "undefined",
  });
  return queryResult;
};
