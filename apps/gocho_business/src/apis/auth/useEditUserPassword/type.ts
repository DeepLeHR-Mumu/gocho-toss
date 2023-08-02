import { AxiosResponse } from "axios";

export interface RequestObjDef {
  origin_password: string;
  new_password: string;
  managerId: number;
}

export interface ResponseObjDef {
  access_token: string;
  refresh_token: string;
}

export interface PatchUserPasswordDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse<ResponseObjDef>>;
}
