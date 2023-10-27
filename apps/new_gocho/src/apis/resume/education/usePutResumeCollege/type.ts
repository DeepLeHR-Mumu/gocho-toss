import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

import { PostCollegeDef } from "../type";

export interface RequestObjDef extends PostCollegeDef {
  resumeId: number;
  collegeId: number;
}

export interface PutResumeCollegeResponse {
  data: { id: number };
}

export interface PutResumeCollegeDef {
  ({ resumeId, collegeId, ...requestObj }: RequestObjDef): Promise<PutResumeCollegeResponse>;
}

export interface UsePutResumeCollegeProps {
  (resumeId: number): UseMutationResult<PutResumeCollegeResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
