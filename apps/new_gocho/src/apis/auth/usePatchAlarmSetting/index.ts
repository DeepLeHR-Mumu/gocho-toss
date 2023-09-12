import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { axiosInstance } from "../../axiosInstance";

import {
  PatchUserAlarmSettingDef,
  PatchUserAlarmSettingResponse,
  PatchUserAlarmSettingProps,
  RequestObjDef,
} from "./type";

const patchUserAlarmSetting: PatchUserAlarmSettingDef = async (requestObj) => {
  const { alarmSetting } = requestObj;
  const { data } = await axiosInstance.patch(`/users/${requestObj.userId}/alarms/config`, {
    [alarmSetting.alarmText]: alarmSetting.alarmReceive,
  });
  return data;
};

export const usePatchAlarmSetting: PatchUserAlarmSettingProps = () => {
  return useMutation<PatchUserAlarmSettingResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: patchUserAlarmSetting,
  });
};
