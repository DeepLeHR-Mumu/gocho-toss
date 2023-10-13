import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

export interface RequestObjDef {
  bannerId: number;
}

export interface DeleteTopBannerDef {
  ({ bannerId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useDeleteTopBannerProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
