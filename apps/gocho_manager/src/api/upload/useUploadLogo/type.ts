import { ResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  logo: FormData;
}

export interface PostLogoResponseDef extends ResponseDef {
  status_name: string;
  data: string;
}

export interface PostLogoDef {
  ({ logo }: RequestObjDef): Promise<PostLogoResponseDef>;
}

export interface useUploadLogoProps {
  (): UseMutationResult<PostLogoResponseDef, AxiosError, RequestObjDef>;
}
