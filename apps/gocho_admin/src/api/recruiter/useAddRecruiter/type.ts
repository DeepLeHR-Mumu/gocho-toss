import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  company_id: number;
  email: string;
  name: string;
  department: string;
}

export interface PostRecruiterDef {
  ({ company_id, email, name, department }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useAddRecruiterProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
