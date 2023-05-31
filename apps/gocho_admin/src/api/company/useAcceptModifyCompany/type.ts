import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "shared-type/api/responseType";

export interface RequestObjDef {
  companyId: number;
}

export interface AcceptModifyCompanyDef {
  ({ companyId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseAcceptModifyCompanyProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}