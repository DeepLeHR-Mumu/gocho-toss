import { ResponseDef } from "@sharedType/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  title: string;
  description: string;
  type: number;
}

export interface PostWritePostingDef {
  ({ title, description, type }: RequestObjDef): Promise<ResponseDef>;
}

export interface useWritePostingProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
