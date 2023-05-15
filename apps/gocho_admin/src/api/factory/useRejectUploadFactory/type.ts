import { AxiosError } from "axios";
import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  factoryId: number;
  reason: string;
}

export interface RejectUploadFactoryDef {
  ({ factoryId, reason }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseRejectUploadFactoryProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
