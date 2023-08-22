import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  email: string;
  password: string;
}

export interface ResponseObjDef {
  data: { access_token: string; refresh_token: string };
}

export interface PostLoginDef {
  ({ email, password }: RequestObjDef): Promise<ResponseObjDef>;
}

export interface useDoLoginProps {
  (): UseMutationResult<ResponseObjDef, AxiosError, RequestObjDef>;
}
