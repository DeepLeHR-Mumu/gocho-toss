import { useInfiniteQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/apis/axiosInstance";
import { alarmArrKeyObj, AlarmArrRequestDef } from "@/constants/queryKeyFactory/user/alarmKeyObj";

import { GetAlarmArrDef } from "./type";

export const getAlarmArr: GetAlarmArrDef = async (requestObj) => {
  const { data } = await axiosInstance.get(`/users/${requestObj.userId}/alarms`, {
    params: requestObj,
  });
  return data;
};

export const useInfiniteAlarmArr = (requestObj: AlarmArrRequestDef) =>
  useInfiniteQuery(
    alarmArrKeyObj.alarmArr(requestObj),
    ({ pageParam = 1 }) => getAlarmArr({ ...requestObj, page: pageParam }),
    {
      getNextPageParam: (lastPage, allPosts) =>
        lastPage.page_result.page < allPosts[0].page_result.total_pages ? lastPage.page_result.page + 1 : undefined,
    }
  );
