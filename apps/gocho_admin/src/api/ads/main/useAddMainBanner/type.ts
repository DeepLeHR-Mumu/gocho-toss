import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

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

export interface PostMainBannerDef {
  ({ pcImage, mobileImage, dto }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useAddMainBannerProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
