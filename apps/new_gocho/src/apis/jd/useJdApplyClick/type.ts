import { AxiosResponse } from "axios";

export interface RequestObjDef {
  id: number;
}

export interface PostJdApplyClickDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}
