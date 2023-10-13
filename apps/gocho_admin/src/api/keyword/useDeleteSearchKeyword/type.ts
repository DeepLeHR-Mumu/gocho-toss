import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  keyword: string;
}

export interface DeleteSearchKeywordDef {
  ({ keyword }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useDeleteSearchKeywordProps {
  (): UseMutationResult<AdminResponseDef, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
