import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  managerId: number;
  origin_password: string;
  new_password: string;
}

export interface EditRecruiterDef {
  ({ managerId }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseEditRecruiterProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
