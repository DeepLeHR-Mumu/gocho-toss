import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";
import { PostCareerDef } from "../type";

export interface RequestObjDef extends PostCareerDef {
  resumeId: number;
  careerId: number;
}

export interface PutResumeCareerResponse {
  data: { id: number };
}

export interface PutResumeCareerDef {
  ({ resumeId, careerId, ...requestObj }: RequestObjDef): Promise<PutResumeCareerResponse>;
}

export interface UsePostResumeCareerProps {
  (resumeId: number): UseMutationResult<PutResumeCareerResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
