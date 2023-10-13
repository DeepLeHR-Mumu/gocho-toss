import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  jdId: number;
  reason: string;
}

export interface RejectModifyJdDef {
  ({ jdId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseRejectModifyJdProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
