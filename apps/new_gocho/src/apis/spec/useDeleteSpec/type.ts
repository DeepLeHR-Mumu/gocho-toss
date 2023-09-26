import { ResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  id: number;
}

export interface PostDeleteMySpecDef {
  ({ id }: RequestObjDef): Promise<ResponseDef>;
}

export interface useDeleteMySpecProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
