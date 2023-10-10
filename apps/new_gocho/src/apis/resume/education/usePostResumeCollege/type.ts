import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { PostCollegeDef } from "../type";

export interface RequestObjDef extends PostCollegeDef {
  resumeId: number;
}

export interface PostResumeCollegeResponse {
  data: { id: number };
}

export interface PostResumeCollegeDef {
  ({ resumeId, name, ...requestObj }: RequestObjDef): Promise<PostResumeCollegeResponse>;
}

export interface UsePostResumeCollegeProps {
  (): UseMutationResult<PostResumeCollegeResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
