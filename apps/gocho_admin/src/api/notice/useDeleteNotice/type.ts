import { AxiosResponse } from "axios";

export interface RequestObjDef {
  noticeId: number;
}

export interface DeleteNoticeDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}
