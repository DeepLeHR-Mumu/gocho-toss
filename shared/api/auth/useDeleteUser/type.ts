import { ResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  id: number;
}

export interface DeleteUserInfoDef {
  ({ id }: RequestObjDef): Promise<ResponseDef>;
}

export interface UseDeleteUserInfoDef {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
