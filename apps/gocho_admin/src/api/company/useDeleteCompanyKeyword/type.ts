import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

export interface RequestObjDef {
  keyword: string;
}

export interface DeleteCompanyKeywordDef {
  ({ keyword }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useDeleteCompanyKeywordProps {
  (): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
