import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number;
  jdId?: number;
  description: string;
}

export interface PostWriteCompanyCommentDef {
  ({ companyId, description }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useWriteCompanyCommentProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
