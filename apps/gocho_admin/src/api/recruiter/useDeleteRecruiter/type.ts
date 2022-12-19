import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface RequestObjDef {
  managerId: number;
}

export interface DeleteRecruiterDef {
  ({ managerId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useDeleteRecruiterProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
