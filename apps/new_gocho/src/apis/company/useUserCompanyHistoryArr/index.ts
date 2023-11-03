import { useQuery } from "@tanstack/react-query";

import { BACKEND_URL } from "shared-constant";

import {
  UserCompanyHistoryArrRequestDef,
  userCompanyHistoryArrKeyObj,
} from "@/constants/queryKeyFactory/company/companyHistoryKeyObj";

import { axiosInstance } from "../../axiosInstance";

import { GetUserCompanyHistoryDef } from "./type";
import { selector } from "./util";

export const getUserCompanyHistoryArr: GetUserCompanyHistoryDef = async ({ queryKey: [{ requestObj }] }) => {
  const [BACKEND_URL_WITHOUT_VERSION] = BACKEND_URL.split("/v1");
  const { data } = await axiosInstance.get(
    `${BACKEND_URL_WITHOUT_VERSION}/v2/users/${requestObj?.userId}/company-histories`,
    { params: requestObj }
  );
  return data;
};

export const useUserCompanyHistoryArr = (requestObj: UserCompanyHistoryArrRequestDef) =>
  useQuery({
    queryKey: userCompanyHistoryArrKeyObj.companyHistoryArr(requestObj),
    queryFn: getUserCompanyHistoryArr,
    enabled: Boolean(requestObj.userId),
    select: ({ data, page_result }) => selector(data, page_result),
  });
