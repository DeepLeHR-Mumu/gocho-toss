import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  userId: number;
  origin_password?: string;
  new_password?: string;
}

export interface UserPasswordResponse {
  data: { access_token: string; refresh_token: string };
}

export interface PatchUserPasswordDef {
  ({ userId, origin_password, new_password }: RequestObjDef): Promise<UserPasswordResponse>;
}

export interface ErrorResponse extends AxiosError {
  status: string;
  error_message: string;
  error_code: number;
  status_name: string;
  path: string;
  method: string;
}

export interface UsePatchUserPasswordProps {
  (): UseMutationResult<UserPasswordResponse, ErrorResponse, RequestObjDef>;
}
