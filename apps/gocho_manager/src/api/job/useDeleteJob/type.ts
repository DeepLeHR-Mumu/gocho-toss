import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface RequestObjDef {
  jdId: number;
}

export interface DeleteJobDef {
  ({ jdId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useDeleteJobProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
