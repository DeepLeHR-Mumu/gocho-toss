import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  companyId: number;
}

export interface DeleteCompanyDef {
  ({ companyId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useDeleteCompanyProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
