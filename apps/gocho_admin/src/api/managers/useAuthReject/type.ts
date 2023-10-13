import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  managerId: number;
  reason: string | null;
}

export interface PostAuthRejectDef {
  ({ managerId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useAuthRejectProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
