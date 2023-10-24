import { AxiosError, AxiosResponse } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

export interface RequestObjDef {
  resumeId: number;
  educationId: number;
}

export interface DeleteResumeEducationDef {
  ({ resumeId, educationId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseDeleteResumeEducationProps {
  (resumId: number): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
