import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosInstance } from "../../../useIsRefreshLock";
import { RequestObjDef, PatchReadAlarmDef } from "./type";

export const patchReadAlarm: PatchReadAlarmDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(
    `/managers/${requestObj.managerId}/alarms?category=${requestObj.category}`
  );
  return data;
};

export const useReadAlarm = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: patchReadAlarm });
