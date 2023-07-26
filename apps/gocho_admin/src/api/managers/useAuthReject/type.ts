import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  managerId: number;
  reason: string;
}

export interface PostAuthRejectDef {
  ({ managerId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAuthRejectProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
