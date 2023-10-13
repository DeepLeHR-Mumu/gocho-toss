import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  managerId: number;
  reason: string | null;
}

export interface PostAuthRejectDef {
  ({ managerId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAuthRejectProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
