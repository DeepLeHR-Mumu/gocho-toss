import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface RequestObjDef {
  bannerId: number;
}

export interface DeleteTopBannerDef {
  ({ bannerId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useDeleteTopBannerProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
