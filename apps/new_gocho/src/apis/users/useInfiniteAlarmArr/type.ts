import { PageResultDef } from "shared-type/api/paginationType";

import { AlarmArrRequestDef } from "@/constants/queryKeyFactory/user/alarmKeyObj";

import { AlarmDef } from "../type/alarm";

export interface AlarmArrResponseObjDef {
  data: AlarmDef[];
  page_result: PageResultDef;
}

export interface GetAlarmArrDef {
  (requestObj: AlarmArrRequestDef): Promise<AlarmArrResponseObjDef>;
}
