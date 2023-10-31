import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

export interface RequestObjDef {
  userId: number;
  alarmSetting: {
    alarmText: "benefitEvent" | "bookmarkCompanyNewJd" | "bookmarkJdEndTime" | "communityNewComment";
    alarmReceive: boolean;
  };
}

export interface PatchUserAlarmSettingResponse {
  data: { access_token: string; refresh_token: string };
}

export interface PatchUserAlarmSettingDef {
  ({ userId, alarmSetting }: RequestObjDef): Promise<PatchUserAlarmSettingResponse>;
}

export interface PatchUserAlarmSettingProps {
  (): UseMutationResult<PatchUserAlarmSettingResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
