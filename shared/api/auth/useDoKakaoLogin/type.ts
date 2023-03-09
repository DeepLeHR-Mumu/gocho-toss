import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  code: string;
}

export interface ResponseObjDef {
  data: {
    result: "NEW_USER" | "GOCHO_USER" | "KAKAO_LOGIN_OK";
    access_token: string | undefined;
    refresh_token: string | undefined;
  };
}

export interface PostKakaoLoginDef {
  ({ code }: RequestObjDef): Promise<ResponseObjDef>;
}

export interface useDoLoginProps {
  (): UseMutationResult<ResponseObjDef, AxiosError, RequestObjDef>;
}
