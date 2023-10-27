import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

import { PostExtraDef } from "../type";

export interface RequestObjDef extends PostExtraDef {
  resumeId: number;
  extraId: number;
}

export interface PutResumeExtraResponse {
  data: { id: number };
}

export interface PutResumeExtraDef {
  ({ resumeId, extraId, ...requestObj }: RequestObjDef): Promise<PutResumeExtraResponse>;
}

export interface UsePutResumeExtraProps {
  (resumeId: number): UseMutationResult<PutResumeExtraResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
