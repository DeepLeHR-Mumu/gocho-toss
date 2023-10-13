import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "@/types";

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
