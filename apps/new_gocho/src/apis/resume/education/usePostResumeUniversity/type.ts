import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

import { PostUniversityDef } from "../type";

export interface RequestObjDef extends PostUniversityDef {
  resumeId: number;
}

export interface PostResumeUniversityResponse {
  data: { id: number };
}

export interface PostResumeUniversityDef {
  ({ resumeId, ...requestObj }: RequestObjDef): Promise<PostResumeUniversityResponse>;
}

export interface UsePostResumeUniversityProps {
  (resumeId: number): UseMutationResult<PostResumeUniversityResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
