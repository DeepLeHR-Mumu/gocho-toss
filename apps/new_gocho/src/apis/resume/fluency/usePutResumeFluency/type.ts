import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";
import { PostFluencyDef } from "../type";

export interface RequestObjDef extends PostFluencyDef {
  resumeId: number;
  fluencyId: number;
}

export interface PutResumeFluencyResponse {
  data: { id: number };
}

export interface PutResumeFluencyDef {
  ({ resumeId, fluencyId, ...requestObj }: RequestObjDef): Promise<PutResumeFluencyResponse>;
}

export interface UsePutResumeFluencyProps {
  (): UseMutationResult<PutResumeFluencyResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
