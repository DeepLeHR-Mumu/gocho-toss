import { ResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  postingId: number;
  description: string;
  commentId: number;
}

export interface PutChangeCommentDef {
  ({ postingId, commentId, description }: RequestObjDef): Promise<ResponseDef>;
}

export interface useChangeCommentProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
