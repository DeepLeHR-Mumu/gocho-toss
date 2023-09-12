import { useQuery } from "@tanstack/react-query";

import {
  UserCompanyHistoriesRequestDef,
  userCompanyHistoriesArrKeyObj,
} from "@/constants/queryKeyFactory/company/companyHistoriesKeyObj";

import { axiosInstance } from "../../axiosInstance";

import { GetUserCompanyHistoriesDef } from "./type";
import { selector } from "./util";

export const getUserCompanyHistories: GetUserCompanyHistoriesDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/company-histories`, { params: requestObj });
  return data;
};

export const useUserCompanyHistoriesArr = (requestObj: UserCompanyHistoriesRequestDef) => {
  return useQuery({
    queryKey: userCompanyHistoriesArrKeyObj.companyHistoriesArr(requestObj),
    queryFn: getUserCompanyHistories,
    enabled: Boolean(requestObj.userId),
    select: ({ data, page_result }) => {
      return selector(data, page_result);
    },
  });
};
