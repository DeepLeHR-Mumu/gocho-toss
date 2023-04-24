import { AxiosResponse } from "axios";

export interface RequestObjDef {
  companyId: number;
  commentId: number;
  type: "like" | "dislike";
}

export interface PostCompanyBookmarkDef {
  ({ commentId, type, companyId }: RequestObjDef): Promise<AxiosResponse>;
}
