import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  managerId: number;
}

export interface PostAuthAcceptDef {
  ({ managerId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAuthAcceptProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
