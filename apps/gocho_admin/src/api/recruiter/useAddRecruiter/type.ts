import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  company_id: number;
  email: string;
  password: string;
  name: string;
  department: string;
}

export interface PostRecruiterDef {
  ({ company_id, email, password, name, department }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddRecruiterProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}