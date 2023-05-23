import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "shared-type/api/responseType";

import { ErrorResponseDef } from "@/types";

export interface RequestObjDef {
  keyword: string;
}

export interface PostSearchKeywordDef {
  ({ keyword }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddSearchKeywordProps {
  (): UseMutationResult<AdminResponseDef, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
