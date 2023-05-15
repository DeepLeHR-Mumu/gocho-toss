import { AxiosError } from "axios";
import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  factoryId: number;
}

export interface AcceptModifyFactoryDef {
  ({ factoryId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseAcceptModifyFactoryProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
