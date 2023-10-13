import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  jdId: number;
  reason: string;
}

export interface RejectUploadJdDef {
  ({ jdId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseRejectUploadJdProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
