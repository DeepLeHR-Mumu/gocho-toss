import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

export interface RequestObjDef {
  keyword: string;
  company_id: number;
}

export interface PostCompanyKeywordDef {
  ({ keyword, company_id }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useAddCompanyKeywordProps {
  (): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
