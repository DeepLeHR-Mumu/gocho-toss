import { UserInfoObjDef } from "../type/userInfo";

interface ResponseObjDef {
  info: UserInfoObjDef;
}

export interface PostUserAuthDef {
  (): Promise<ResponseObjDef>;
}
