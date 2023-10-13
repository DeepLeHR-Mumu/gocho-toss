import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number;
  reason: string;
}

export interface RejectModifyCompanyDef {
  ({ companyId, reason }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseRejectModifyCompanyProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
