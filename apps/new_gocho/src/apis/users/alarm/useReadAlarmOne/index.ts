import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { axiosInstance } from "@/apis/axiosInstance";

import { ReadAlarmOneDef, RequestObjDef } from "./type";

const patchReadAlarmOne: ReadAlarmOneDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/users/${requestObj.userId}/alarms/${requestObj.alarmId}`);
  return data;
};

export const useReadAlarmOne = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({
    mutationFn: patchReadAlarmOne,
  });
