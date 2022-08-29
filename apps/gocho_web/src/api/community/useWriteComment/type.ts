import { ResponseDef } from "@type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  postingId: number;
  description: string;
  parentCommentId: null | number;
}

export interface PostWriteCommentDef {
  ({
    postingId,
    description,
    parentCommentId,
  }: RequestObjDef): Promise<ResponseDef>;
}

export interface useWriteCommentProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
