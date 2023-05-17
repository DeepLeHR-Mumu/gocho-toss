import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  image: File;
  dto: {
    color: string;
    jd_id: number;
    start_time: string;
    end_time: string;
  };
}

export interface PostJdBannerDef {
  ({ dto, image }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddJdBannerProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
