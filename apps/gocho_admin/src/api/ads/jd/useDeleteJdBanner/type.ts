import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface RequestObjDef {
  bannerId: number;
}

export interface DeleteJdBannerDef {
  ({ bannerId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useDeleteJdBannerProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
