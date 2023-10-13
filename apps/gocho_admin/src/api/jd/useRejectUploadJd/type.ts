import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  jdId: number;
  reason: string;
}

export interface RejectUploadJdDef {
  ({ jdId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseRejectUploadJdProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
