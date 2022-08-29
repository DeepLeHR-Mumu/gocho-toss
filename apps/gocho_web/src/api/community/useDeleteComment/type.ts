import { ResponseDef } from "@type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  postingId: number;
  commentId: number;
}

export interface PostDeleteCommentDef {
  ({ postingId, commentId }: RequestObjDef): Promise<ResponseDef>;
}

export interface useDeleteCommentProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
