import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  type: "M" | "T" | "S";
  from: number;
  to: number;
}

export interface MoveBannerDef {
  ({ type, from, to }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseMoveBannerProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
