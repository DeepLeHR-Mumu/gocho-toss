import { AxiosResponse } from "axios";

export interface RequestObjDef {
  jdId: number;
}

export interface PostJdApplyClickDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}
