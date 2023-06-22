import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosInstance } from "../../../useIsRefreshLock";
import { GetAlarmArrDef, alarmArrKeyObj, RequestObjDef, ResponseObjDef } from "./type";
import { alarmArrSelector } from "./util";

export const getAlarmArr: GetAlarmArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/managers/${requestObj.managerId}/alarms`, {
    params: requestObj,
  });
  return data;
};

export const useAlarmArr = (requestObj: RequestObjDef) =>
  useQuery<
    ResponseObjDef,
    AxiosError<ErrorResponseDef>,
    ReturnType<typeof alarmArrSelector>,
    ReturnType<typeof alarmArrKeyObj.arr>
  >({
    queryKey: alarmArrKeyObj.arr(requestObj),
    queryFn: getAlarmArr,
    select: (data) => alarmArrSelector(data),
    enabled: Boolean(requestObj.managerId) && !Number.isNaN(requestObj.page),
  });
