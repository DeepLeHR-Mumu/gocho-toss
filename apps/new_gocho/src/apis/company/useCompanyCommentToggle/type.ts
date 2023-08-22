import { AxiosResponse } from "axios";

export interface RequestObjDef {
  companyId: number;
  commentId: number;
  type: "likes" | "dislikes";
}

export interface PostCompanyBookmarkDef {
  ({ commentId, type, companyId }: RequestObjDef): Promise<AxiosResponse>;
}
