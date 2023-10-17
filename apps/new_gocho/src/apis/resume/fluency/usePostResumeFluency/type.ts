import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";
import { PostFluencyDef } from "../type";

export interface RequestObjDef extends PostFluencyDef {
  resumeId: number;
}

export interface PostResumeFluencyResponse {
  data: { id: number };
}

export interface PostResumeFluencyDef {
  ({ resumeId, ...requestObj }: RequestObjDef): Promise<PostResumeFluencyResponse>;
}

export interface UsePostResumeFluencyProps {
  (): UseMutationResult<PostResumeFluencyResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
