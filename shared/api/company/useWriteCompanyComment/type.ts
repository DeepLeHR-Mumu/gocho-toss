import { ResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number;
  description: string;
}

export interface PostWriteCompanyCommentDef {
  ({ companyId, description }: RequestObjDef): Promise<ResponseDef>;
}

export interface useWriteCompanyCommentProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
