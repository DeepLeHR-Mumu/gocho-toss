import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

export interface RequestObjDef {
  jdId: number;
}

export interface DeleteJdDef {
  ({ jdId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useDeleteJdProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
