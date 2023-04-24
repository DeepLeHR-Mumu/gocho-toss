import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  dto: {
    color: string;
    jd_id: number;
    start_time: string;
    end_time: string;
  };
}

export interface PostTopBannerDef {
  ({ dto }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddTopBannerProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
