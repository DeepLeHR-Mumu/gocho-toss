import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  jdId: number;
}

export interface DeleteJdDef {
  ({ jdId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useDeleteJdProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
