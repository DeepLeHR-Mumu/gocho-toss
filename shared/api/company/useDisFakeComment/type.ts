import { ResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number;
  commentId: number;
}

export interface PostDisFakeCommentDef {
  ({ companyId, commentId }: RequestObjDef): Promise<ResponseDef>;
}

export interface UseDisFakeCommentProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
