import { AxiosError } from "axios";
import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  factoryId: number;
}

export interface AcceptUploadFactoryDef {
  ({ factoryId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseAcceptUploadFactoryProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
