import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  access_token: string;
  refresh_token: string;
}

export interface ResponseObjDef {
  data: {
    result: "NEW_USER" | "GOCHO_USER" | "KAKAO_LOGIN_OK";
    access_token: string | undefined;
    refresh_token: string | undefined;
  };
}

export interface PostKakaoLoginDef {
  ({ access_token, refresh_token }: RequestObjDef): Promise<ResponseObjDef>;
}

export interface useDoLoginProps {
  (): UseMutationResult<ResponseObjDef, AxiosError, RequestObjDef>;
}
