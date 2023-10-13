import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

export interface RequestObjDef {
  jdId: number;
}

export interface EndJdDef {
  ({ jdId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useEndJdProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
