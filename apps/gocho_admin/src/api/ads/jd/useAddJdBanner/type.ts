import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  pcImage: File;
  mobileImage: File;
  dto: {
    link: string;
    start_time: string;
    end_time: string;
  };
}

export interface PostJdBannerDef {
  ({ pcImage, mobileImage, dto }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddJdBannerProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
