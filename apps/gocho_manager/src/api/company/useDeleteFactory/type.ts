import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface RequestObjDef {
  factoryId: number;
}

export interface DeleteFactoryDef {
  ({ factoryId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useDeleteFactoryProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
