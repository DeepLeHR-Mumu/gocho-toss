import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { PostUniversityDef } from "../type";

export interface RequestObjDef extends PostUniversityDef {
  resumeId: number;
  universityId: number;
}

export interface PutResumeUniversityResponse {
  data: { id: number };
}

export interface PutResumeUniversityDef {
  ({ resumeId, universityId, ...requestObj }: RequestObjDef): Promise<PutResumeUniversityResponse>;
}

export interface UsePutResumeUniversityProps {
  (): UseMutationResult<PutResumeUniversityResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
