import { ResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number;
  commentId: number;
}

export interface PostDisLikeCommentDef {
  ({ companyId, commentId }: RequestObjDef): Promise<ResponseDef>;
}

export interface UseDisLikeCommentProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
