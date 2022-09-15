import { ResponseDef } from "@sharedType/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  id: number;
}

export interface PostDeletePostingDef {
  ({ id }: RequestObjDef): Promise<ResponseDef>;
}

export interface useDeletePostingProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
