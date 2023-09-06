import { AxiosResponse } from "axios";

export interface RequestObjDef {
  userId: number;
  reason: string;
}

export interface ReportUserDef {
  ({ userId }: RequestObjDef): Promise<AxiosResponse>;
}
