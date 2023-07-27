import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  type: number;
  title: string;
  description: string;
}

export interface PostNoticeDef {
  ({ type, title, description }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddNoticeProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
