import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

export interface RequestObjDef {
  bannerId: number;
}

export interface DeleteMainBannerDef {
  ({ bannerId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useDeleteMainBannerProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
