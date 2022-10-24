import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  dto: Blob;
  image: File;
}

export interface PostMainBannerDef {
  ({ dto, image }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddMainBannerProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
