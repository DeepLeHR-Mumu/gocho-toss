import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api/errorResponseType";

export interface RequestObjDef {
  userId: number;
  alarmSetting: {
    alarmText: "benefit_event" | "bookmark_company_new_jd" | "bookmark_jd_end_time" | "community_new_comment";
    alarmReceive: boolean;
  };
}

export interface UserAlarmSettingResponse {
  data: { access_token: string; refresh_token: string };
}

export interface PatchUserAlarmDef {
  ({ userId, alarmSetting }: RequestObjDef): Promise<UserAlarmSettingResponse>;
}

export interface UserAlarmSettingProps {
  (): UseMutationResult<UserAlarmSettingResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
