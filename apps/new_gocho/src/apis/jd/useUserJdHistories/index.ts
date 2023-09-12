import { useQuery } from "@tanstack/react-query";

import {
  UserHistoriesJdArrRequestDef,
  userJdHistoriesKeyObj,
} from "@/constants/queryKeyFactory/jd/jdUserHistoriesArrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetUserJdHistoriesArrDef } from "./type";
import { selector } from "./util";

export const getUserJdHistoriesArr: GetUserJdHistoriesArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/jd-bookmarks`, { params: requestObj });
  return data;
};

export const useUserJdHistoriesArr = (requestObj: UserHistoriesJdArrRequestDef) => {
  return useQuery({
    queryKey: userJdHistoriesKeyObj.jdHistoriesArr(requestObj),
    queryFn: getUserJdHistoriesArr,
    enabled: Boolean(requestObj.userId),
    select: ({ data, page_result }) => {
      return selector(data, page_result);
    },
  });
};
