import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  dto: Blob;
  logo: File;
}

export interface PostCompanyDef {
  ({ dto, logo }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddCompanyProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
