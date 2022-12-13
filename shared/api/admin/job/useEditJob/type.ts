import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  jdId: number;
  dto: FormData;
}

export interface PostEditJobDef {
  ({ jdId, dto }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useEditJobProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
