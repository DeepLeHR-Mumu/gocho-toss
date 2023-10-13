import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  color: string;
  jd_id: number;
  start_time: string;
  end_time: string;
}

export interface PostTopBannerDef {
  ({ color, jd_id, end_time, start_time }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddTopBannerProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
