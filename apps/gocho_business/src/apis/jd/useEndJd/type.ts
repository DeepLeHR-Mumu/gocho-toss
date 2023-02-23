import { AxiosResponse } from "axios";

export interface RequestObjDef {
  jdId: number;
}

export interface EndJdDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}
