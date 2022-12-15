import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "shared-type/api/responseType";

export interface RequestObjDef {
  jdId: number;
  type: string;
}

export interface RejectJdDef {
  ({ jdId, type }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseRejectJdProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
