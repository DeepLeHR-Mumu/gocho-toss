import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  managerId: number;
}

export interface PostAuthAcceptDef {
  ({ managerId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useAuthAcceptProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
