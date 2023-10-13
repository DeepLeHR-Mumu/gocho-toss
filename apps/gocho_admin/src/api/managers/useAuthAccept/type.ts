import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  managerId: number;
}

export interface PostAuthAcceptDef {
  ({ managerId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAuthAcceptProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
