import { useInfiniteQuery } from "@tanstack/react-query";

import { alarmArrKeyObj, AlarmArrRequestDef } from "@/constants/queryKeyFactory/user/alarmKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetAlarmArrDef } from "./type";

export const getAlarmArr: GetAlarmArrDef = async (requestObj) => {
  const { data } = await axiosInstance.get(`/users/${requestObj.userId}/alarms`, {
    params: requestObj,
  });
  return data;
};

export const useInfiniteAlarmArr = (requestObj: AlarmArrRequestDef) =>
  useInfiniteQuery(alarmArrKeyObj.alarmArr(requestObj), () => getAlarmArr({ ...requestObj }), {
    getNextPageParam: (lastPage, allPosts) =>
      lastPage.page_result.total_pages !== allPosts[0].page_result.total_pages
        ? lastPage.page_result.page + 1
        : undefined,
  });
