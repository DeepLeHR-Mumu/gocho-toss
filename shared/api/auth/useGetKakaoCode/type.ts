import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface RequestObjDef {
  APIKey: string;
  uri: string;
  code: string;
}

export interface ResponseObjDef {
  data: {
    access_token: string | undefined;
    refresh_token: string | undefined;
  };
}

export interface getKakaoCodeDef {
  ({ code }: RequestObjDef): Promise<ResponseObjDef>;
}

export interface useGetKakaoCodeProps {
  (): UseMutationResult<ResponseObjDef, AxiosError, RequestObjDef>;
}
