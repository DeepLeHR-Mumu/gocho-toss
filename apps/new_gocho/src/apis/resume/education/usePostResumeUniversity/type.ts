import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { PostUniversityDef } from "../type";

export interface RequestObjDef extends PostUniversityDef {
  resumeId: number;
}

export interface PostResumeUniversityResponse {
  data: { id: number };
}

export interface PostResumeUniversityDef {
  ({
    resumeId,
    name,
    graduate_type,
    start_date,
    end_date,
    major,
    grade,
    max_grade,
    etc,
  }: RequestObjDef): Promise<PostResumeUniversityResponse>;
}

export interface UsePostResumeUniversityProps {
  (): UseMutationResult<PostResumeUniversityResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
