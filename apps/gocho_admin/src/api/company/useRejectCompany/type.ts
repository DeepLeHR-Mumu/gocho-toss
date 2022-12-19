import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "shared-type/api/responseType";

export interface RequestObjDef {
  companyId: number;
  type: string;
}

export interface RejectCompanyDef {
  ({ companyId, type }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseRejectCompanyProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
