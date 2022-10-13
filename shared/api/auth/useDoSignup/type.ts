import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  email: string;
  nickname: string;
  password: string;
}

export interface SignUpResponseDef {
  data: { token: string };
}

export interface PostSignUpDef {
  ({ email, password, nickname }: RequestObjDef): Promise<SignUpResponseDef>;
}

export interface UseDoSignUpProps {
  (): UseMutationResult<SignUpResponseDef, AxiosError, RequestObjDef>;
}
