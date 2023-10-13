import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  jdId: number;
}

export interface AcceptUploadJdDef {
  ({ jdId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseAcceptUploadJdProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
