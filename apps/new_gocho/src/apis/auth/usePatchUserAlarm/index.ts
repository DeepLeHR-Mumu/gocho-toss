import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api/errorResponseType";
import { axiosInstance } from "../../axiosInstance";

import { PatchUserAlarmDef, UserAlarmSettingResponse, UserAlarmSettingProps, RequestObjDef } from "./type";

const patchUserAlarmSetting: PatchUserAlarmDef = async (requestObj) => {
  const { alarmSetting } = requestObj;
  const { data } = await axiosInstance.patch(`/users/${requestObj.userId}/alarms/config`, {
    [alarmSetting.alarmText]: alarmSetting.alarmReceive,
  });
  return data;
};

export const usePatchAlarm: UserAlarmSettingProps = () => {
  return useMutation<UserAlarmSettingResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: patchUserAlarmSetting,
  });
};
