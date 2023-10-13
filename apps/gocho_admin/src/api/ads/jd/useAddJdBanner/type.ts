import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  pcImage: File;
  mobileImage: File;
  dto: {
    type: number;
    link: string | null;
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
