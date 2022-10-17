import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface RequestObjDef {
  jdId: number;
}

export interface EndJobDef {
  ({ jdId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useEndJobProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
