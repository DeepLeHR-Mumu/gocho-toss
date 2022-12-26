import { AxiosError } from "axios";
import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  factoryId: number;
  type: string;
}

export interface AcceptFactoryDef {
  ({ factoryId, type }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseAcceptFactoryProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
