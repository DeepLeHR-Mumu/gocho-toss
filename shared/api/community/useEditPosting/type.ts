import { ResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  id: number;
  title: string;
  description: string;
  type: number;
}

export interface editPostingDef {
  ({ id, title, description, type }: RequestObjDef): Promise<ResponseDef>;
}

export interface useEditPostingProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
