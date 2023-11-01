import { AxiosResponse } from "axios";
import { UserInfoObjDef } from "../type/userInfo";

interface ResponseObjDef {
  data: UserInfoObjDef;
}

export interface GetUserInfoDef {
  (): Promise<AxiosResponse<ResponseObjDef>>;
}
