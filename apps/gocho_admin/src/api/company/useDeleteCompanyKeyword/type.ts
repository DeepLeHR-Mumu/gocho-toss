import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "shared-type/api/responseType";

export interface RequestObjDef {
  keyword: string;
}

export interface DeleteCompanyKeywordDef {
  ({ keyword }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useDeleteCompanyKeywordProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
