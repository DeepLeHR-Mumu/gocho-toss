import { AxiosResponse } from "axios";

export interface RequestObjDef {
  managerId: number;
  category: "all" | "notice" | "company" | "jd";
}

export interface PatchReadAlarmDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}
