import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  jd_id?: number | undefined;
  file_id?: string | undefined;
  type: 0 | 1 | 2;
  color?: string | undefined;
  url?: string | undefined;
  start_time: number;
  end_time: number;
}

export interface PostBannerDef {
  ({ jd_id, file_id, type, color, url, start_time, end_time }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddBannerProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
