import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  email: string;
  password: string;
  auto_login: boolean;
}

export interface ResponseObjDef {
  data: { access_token: string; refresh_token: string };
}

export interface PostLoginDef {
  ({ email, password, auto_login }: RequestObjDef): Promise<ResponseObjDef>;
}

export interface LoginErrorValuesDef extends AxiosError {
  error: {
    status: number;
    status_name: string;
    error_code: string;
    error_message: string;
    path: string;
  };
}

export interface useDoLoginProps {
  (): UseMutationResult<ResponseObjDef, LoginErrorValuesDef, RequestObjDef>;
}
