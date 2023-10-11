import { AxiosResponse } from "axios";

export interface RequestObjDef {
  userId: number;
  alarmId: number;
}

export interface ReadAlarmOneDef {
  ({ userId }: RequestObjDef): Promise<AxiosResponse>;
}
