import { ResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number;
  commentId: number;
}

export interface PostFakeCommentDef {
  ({ companyId, commentId }: RequestObjDef): Promise<ResponseDef>;
}

export interface UseFakeCommentProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
