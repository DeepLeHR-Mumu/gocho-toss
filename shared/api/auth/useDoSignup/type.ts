import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  email: string;
  password: string;
}

export interface SignUpResponseDef {
  data: { access_token: string; refresh_token: string };
}

export interface PostSignUpDef {
  ({ email, password }: RequestObjDef): Promise<SignUpResponseDef>;
}

export interface UseDoSignUpProps {
  (): UseMutationResult<SignUpResponseDef, AxiosError, RequestObjDef>;
}
