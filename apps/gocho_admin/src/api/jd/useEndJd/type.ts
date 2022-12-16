import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface RequestObjDef {
  jdId: number;
}

export interface EndJdDef {
  ({ jdId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useEndJdProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
