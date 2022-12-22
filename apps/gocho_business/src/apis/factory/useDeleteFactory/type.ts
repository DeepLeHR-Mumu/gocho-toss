import { AxiosResponse } from "axios";

export interface RequestObjDef {
  factoryId: number;
}

export interface DeleteFactoryDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}
