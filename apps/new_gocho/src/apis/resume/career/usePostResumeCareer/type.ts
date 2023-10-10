import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";
import { PostCareerDef } from "../type";

export interface RequestObjDef extends PostCareerDef {
  resumeId: number;
}

export interface PostResumeCareerResponse {
  data: { id: number };
}

export interface PostResumeCareerDef {
  ({ resumeId, ...requestObj }: RequestObjDef): Promise<PostResumeCareerResponse>;
}

export interface UsePostResumeCareerProps {
  (): UseMutationResult<PostResumeCareerResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
