import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  managerId: number;
  origin_password: string;
  new_password: string;
}

export interface EditRecruiterDef {
  ({ managerId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseEditRecruiterProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
