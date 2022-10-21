import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface RequestObjDef {
  bannerId: number;
}

export interface DeleteBannerDef {
  ({ bannerId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useDeleteBannerProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
