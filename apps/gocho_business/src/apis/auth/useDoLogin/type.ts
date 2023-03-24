import { AxiosResponse } from "axios";

export interface RequestObjDef {
  email: string;
  password: string;
  auto_login: boolean;
}

export interface ResponseObjDef {
  access_token: string;
  refresh_token: string;
  is_changed: boolean;
}

export interface PostLoginDef {
  ({ email, password, auto_login }: RequestObjDef): Promise<AxiosResponse<ResponseObjDef>>;
}
