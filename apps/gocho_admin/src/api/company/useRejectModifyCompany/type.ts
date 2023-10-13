import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  companyId: number;
  reason: string;
}

export interface RejectModifyCompanyDef {
  ({ companyId, reason }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseRejectModifyCompanyProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
