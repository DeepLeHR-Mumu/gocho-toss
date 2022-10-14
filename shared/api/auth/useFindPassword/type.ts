import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  email: string;
}

export interface ResponseObjDef {
  data: {
    result: "NEW_USER" | "GOCHO_USER" | "KAKAO_LOGIN_OK";
    token: string | undefined;
  };
}

export interface PostFindPasswordDef {
  ({ email }: RequestObjDef): Promise<ResponseObjDef>;
}

export interface UseFindPasswordProps {
  (): UseMutationResult<ResponseObjDef, AxiosError, RequestObjDef>;
}
