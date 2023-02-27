import { ResponseDef } from "shared-type/api/responseType";

export interface RequestObjDef {
  userId: number;
  id: number;
}

export interface DeletePostingBookmarkArrDef {
  ({ userId, id }: RequestObjDef): Promise<ResponseDef>;
}
