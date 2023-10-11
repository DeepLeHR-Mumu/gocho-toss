import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { axiosInstance } from "@/apis/axiosInstance";

import { ReadAlarmAllDef, RequestObjDef } from "./type";

const patchReadAlarmAll: ReadAlarmAllDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/users/${requestObj.userId}/alarms?category=${requestObj.category}`);
  return data;
};

export const useReadAlarmAll = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({
    mutationFn: patchReadAlarmAll,
  });
