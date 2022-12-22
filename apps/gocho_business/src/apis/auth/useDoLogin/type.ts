import { AxiosResponse } from "axios";

export interface RequestObjDef {
  email: string;
  password: string;
  auto_login: boolean;
}

export interface ResponseObjDef {
  access_token: string;
  refresh_token: string;
}

export interface PostLoginDef {
  ({ email, password, auto_login }: RequestObjDef): Promise<AxiosResponse<ResponseObjDef>>;
}
