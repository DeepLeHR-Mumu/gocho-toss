import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  type: "M" | "T" | "S";
  from: number;
  to: number;
}

export interface MoveBannerDef {
  ({ type, from, to }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseMoveBannerProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
