import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export interface RequestObjDef {
  userId: number;
  token: string;
}

export interface PostPassUpdateDef {
  ({ userId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UsePassUpdateProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
