import { AxiosResponse } from "axios";
import { UserInfoObjDef } from "../type/userInfo";

type ResponseObjDef = UserInfoObjDef;

export interface GetUserInfoDef {
  (): Promise<AxiosResponse<ResponseObjDef>>;
}
