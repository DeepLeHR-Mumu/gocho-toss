import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

export interface RequestObjDef {
  bannerId: number;
}

export interface DeleteJdBannerDef {
  ({ bannerId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useDeleteJdBannerProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
