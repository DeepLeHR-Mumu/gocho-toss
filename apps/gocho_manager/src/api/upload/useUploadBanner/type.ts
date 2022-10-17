import { ResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  banner: FormData;
  type: 0 | 1 | 2;
}

export interface PostBannerResponseDef extends ResponseDef {
  status_name: string;
  data: string;
}

export interface PostBannerDef {
  ({ banner }: RequestObjDef): Promise<PostBannerResponseDef>;
}

export interface useUploadBannerProps {
  (): UseMutationResult<PostBannerResponseDef, AxiosError, RequestObjDef>;
}
