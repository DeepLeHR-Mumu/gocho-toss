import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "shared-type/api/responseType";

import { ErrorResponseDef } from "@/types";

export interface RequestObjDef {
  token: string;
  topic: string;
  notification: {
    title: string;
    body: string;
  };
}

export interface PostPushDef {
  ({ token, topic, notification }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddPushProps {
  (): UseMutationResult<AdminResponseDef, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
