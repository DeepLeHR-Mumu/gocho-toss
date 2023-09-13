import { useQuery } from "@tanstack/react-query";

import {
  UserHistoryJdArrRequestDef,
  userJdHistoriesKeyObj,
} from "@/constants/queryKeyFactory/jd/jdUserHistoriesArrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetUserJdHistoryArrDef } from "./type";
import { selector } from "./util";

export const getUserJdHistoryArr: GetUserJdHistoryArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/jd-histories`, { params: requestObj });
  return data;
};

export const useUserJdHistoryArr = (requestObj: UserHistoryJdArrRequestDef) => useQuery({
    queryKey: userJdHistoriesKeyObj.jdHistoriesArr(requestObj),
    queryFn: getUserJdHistoryArr,
    enabled: Boolean(requestObj.userId),
    select: ({ data, page_result }) => selector(data, page_result),
  });
