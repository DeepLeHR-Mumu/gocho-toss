import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  jdId: number;
}

export interface AcceptUploadJdDef {
  ({ jdId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseAcceptUploadJdProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
