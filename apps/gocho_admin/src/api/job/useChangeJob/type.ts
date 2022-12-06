import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  jdId: number;
  dto: FormData;
}

export interface PostJobDef {
  ({ jdId, dto }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useChangeJobProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
