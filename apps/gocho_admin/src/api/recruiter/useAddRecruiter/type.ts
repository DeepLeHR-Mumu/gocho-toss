import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "@/types";

export interface RequestObjDef {
  company_id: number;
  email: string;
  name: string;
  department: string;
}

export interface PostRecruiterDef {
  ({ company_id, email, name, department }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddRecruiterProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
