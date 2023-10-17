import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

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

export interface UsePatchUserPasswordProps {
  (): UseMutationResult<UserPasswordResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
