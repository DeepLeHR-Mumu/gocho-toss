import { ResponseDef } from "shared-type/api/responseType";

export interface RequestObjDef {
  userId: number;
  elemId: number;
}

export interface DeletePostingBookmarkArrDef {
  ({ userId, elemId }: RequestObjDef): Promise<ResponseDef>;
}
