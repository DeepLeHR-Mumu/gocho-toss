import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

import { AdminResponseDef } from "@/types";

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
