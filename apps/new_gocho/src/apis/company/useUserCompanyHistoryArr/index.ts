import { useQuery } from "@tanstack/react-query";

import {
  UserCompanyHistoryArrRequestDef,
  userCompanyHistoryArrKeyObj,
} from "@/constants/queryKeyFactory/company/companyHistoriesKeyObj";

import { axiosInstance } from "../../axiosInstance";

import { GetUserCompanyHistoriesDef } from "./type";
import { selector } from "./util";

export const getUserCompanyHistoryArr: GetUserCompanyHistoriesDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/company-histories`, { params: requestObj });
  return data;
};

export const useUserCompanyHistoryArr = (requestObj: UserCompanyHistoryArrRequestDef) => useQuery({
    queryKey: userCompanyHistoryArrKeyObj.companyHistoryArr(requestObj),
    queryFn: getUserCompanyHistoryArr,
    enabled: Boolean(requestObj.userId),
    select: ({ data, page_result }) => selector(data, page_result),
  });
