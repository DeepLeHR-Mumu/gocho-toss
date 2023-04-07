import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface RequestObjDef {
  keyword: string;
}

export interface DeleteCompanyKeywordDef {
  ({ keyword }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useDeleteCompanyKeywordProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
