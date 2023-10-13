import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

export interface RequestObjDef {
  token: string;
  topic: string;
  notification: {
    title: string;
    body: string;
  };
}

export interface PostPushDef {
  ({ token, topic, notification }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useAddPushProps {
  (): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
