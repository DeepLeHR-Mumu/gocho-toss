import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number;
}

export interface AcceptModifyCompanyDef {
  ({ companyId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseAcceptModifyCompanyProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
