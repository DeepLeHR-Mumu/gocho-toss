import { AxiosResponse } from "axios";

export interface RequestObjDef {
  userId: number;
  category: "all" | "jd" | "company" | "community";
}

export interface ReadAlarmAllDef {
  ({ userId }: RequestObjDef): Promise<AxiosResponse>;
}
