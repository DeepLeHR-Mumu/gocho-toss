import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number;
  dto: Blob;
  image: File;
}

export interface PostCompanyDef {
  ({ companyId, dto, image }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useChangeCompanyProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
