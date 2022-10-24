import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  url: string;
  start_time: number;
  end_time: number;
}

export interface PostSideBannerDef {
  ({ url, start_time, end_time }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddSideBannerProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
