import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "shared-type/api/responseType";

export interface RequestObjDef {
  jdId: number;
}

export interface AcceptModifyJdDef {
  ({ jdId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseAcceptModifyJdProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
