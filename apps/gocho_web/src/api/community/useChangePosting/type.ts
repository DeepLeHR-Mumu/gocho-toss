import { ResponseDef } from "@type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  id: number;
  title: string;
  description: string;
  type: number;
}

export interface PostChangePostingDef {
  ({ id, title, description, type }: RequestObjDef): Promise<ResponseDef>;
}

export interface useChangePostingProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
