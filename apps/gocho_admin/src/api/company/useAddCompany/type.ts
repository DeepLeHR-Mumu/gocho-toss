import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  dto: Blob;
  image: File;
}

export interface PostCompanyDef {
  ({ dto, image }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddCompanyProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
