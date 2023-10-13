import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  jdId: number;
  reason: string;
}

export interface RejectModifyJdDef {
  ({ jdId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseRejectModifyJdProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
