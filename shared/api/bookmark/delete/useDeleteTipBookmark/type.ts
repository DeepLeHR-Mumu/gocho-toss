import { ResponseDef } from "shared-type/api/responseType";

export interface RequestObjDef {
  userId: number;
  id: number;
}

export interface DeleteTipBookmarkArrDef {
  ({ userId, id }: RequestObjDef): Promise<ResponseDef>;
}
