import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { PostCollegeDef } from "../type";

export interface RequestObjDef extends PostCollegeDef {
  resumeId: number;
  collegeId: number;
}

export interface PutResumeCollegeResponse {
  data: { id: number };
}

export interface PutResumeCollegeDef {
  ({
    resumeId,
    collegeId,
    name,
    graduate_type,
    start_date,
    end_date,
    major,
    grade,
    max_grade,
    etc,
  }: RequestObjDef): Promise<PutResumeCollegeResponse>;
}

export interface UsePutResumeCollegeProps {
  (): UseMutationResult<PutResumeCollegeResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
