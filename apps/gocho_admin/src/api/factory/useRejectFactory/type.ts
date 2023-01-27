import { AxiosError } from "axios";
import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  factoryId: number;
  type: string;
  reason: string;
}

export interface RejectFactoryDef {
  ({ factoryId, type }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseRejectFactoryProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
