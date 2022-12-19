import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  image: File;
  dto: {
    color: string;
    jd_id: number;
    start_time: number;
    end_time: number;
  };
}

export interface PostMainBannerDef {
  ({ dto, image }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddMainBannerProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
