import { AxiosResponse } from "axios";

export interface RequestObjDef {
  managerId: number;
}

export interface DeleteUserInfoDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}
