import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  dto: FormData;
}

export interface PostJobDef {
  ({ dto }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddJobProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
