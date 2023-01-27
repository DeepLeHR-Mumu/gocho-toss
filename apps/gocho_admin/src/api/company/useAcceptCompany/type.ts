import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "shared-type/api/responseType";

export interface RequestObjDef {
  companyId: number;
  type: "update";
}

export interface AcceptCompanyDef {
  ({ companyId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseAcceptCompanyProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
