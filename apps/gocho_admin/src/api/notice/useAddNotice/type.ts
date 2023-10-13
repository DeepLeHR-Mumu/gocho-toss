import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  type: number;
  title: string;
  description: string;
}

export interface PostNoticeDef {
  ({ type, title, description }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useAddNoticeProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
