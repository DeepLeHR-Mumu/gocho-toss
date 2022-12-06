import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface RequestObjDef {
  companyId: number;
}

export interface DeleteCompanyDef {
  ({ companyId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useDeleteCompanyProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
