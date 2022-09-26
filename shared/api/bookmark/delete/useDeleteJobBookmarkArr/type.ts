import { ResponseDef } from "shared-type/api/responseType";

export interface RequestObjDef {
  userId: number;
  elemId: number;
}

export interface DeleteJobBookmarkArrDef {
  ({ userId, elemId }: RequestObjDef): Promise<ResponseDef>;
}
