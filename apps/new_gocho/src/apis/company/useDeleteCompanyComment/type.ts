import { AxiosResponse } from "axios";

export interface RequestObjDef {
  companyId: number;
  commentId: number;
}

export interface DeleteCompanyCommentDef {
  ({ commentId, companyId }: RequestObjDef): Promise<AxiosResponse>;
}
