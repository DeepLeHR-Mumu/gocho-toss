import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

import { PostCollegeDef } from "../type";

export interface RequestObjDef extends PostCollegeDef {
  resumeId: number;
}

export interface PostResumeCollegeResponse {
  data: { id: number };
}

export interface PostResumeCollegeDef {
  ({ resumeId, ...requestObj }: RequestObjDef): Promise<PostResumeCollegeResponse>;
}

export interface UsePostResumeCollegeProps {
  (resumeId: number): UseMutationResult<PostResumeCollegeResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
