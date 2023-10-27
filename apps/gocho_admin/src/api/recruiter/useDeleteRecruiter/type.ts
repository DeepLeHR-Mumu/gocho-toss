import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

export interface RequestObjDef {
  managerId: number;
}

export interface DeleteRecruiterDef {
  ({ managerId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useDeleteRecruiterProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
