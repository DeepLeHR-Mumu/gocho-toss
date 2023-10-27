import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  jdId: number;
}

export interface AcceptModifyJdDef {
  ({ jdId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseAcceptModifyJdProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
