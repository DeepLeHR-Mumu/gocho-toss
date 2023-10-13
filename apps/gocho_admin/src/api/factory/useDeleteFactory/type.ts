import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

export interface RequestObjDef {
  factoryId: number;
}

export interface DeleteFactoryDef {
  ({ factoryId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useDeleteFactoryProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
