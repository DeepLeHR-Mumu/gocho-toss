import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  bannerId: number;
}

export interface DeleteMainBannerDef {
  ({ bannerId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useDeleteMainBannerProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
