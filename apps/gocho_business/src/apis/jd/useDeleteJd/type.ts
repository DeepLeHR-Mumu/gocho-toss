import { AxiosResponse } from "axios";

export interface RequestObjDef {
  jdId: number;
}

export interface DeleteJdDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}
