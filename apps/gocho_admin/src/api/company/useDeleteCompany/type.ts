import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

export interface RequestObjDef {
  companyId: number;
}

export interface DeleteCompanyDef {
  ({ companyId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useDeleteCompanyProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
