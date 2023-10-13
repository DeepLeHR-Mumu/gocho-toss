import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  bannerId: number;
}

export interface DeleteTopBannerDef {
  ({ bannerId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useDeleteTopBannerProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
