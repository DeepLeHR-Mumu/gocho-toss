import { AxiosError, AxiosResponse } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

export interface RequestObjDef {
  resumeId: number;
  educationId: number;
}

export interface DeleteResumeEducationDef {
  ({ resumeId, educationId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseDeleteResumeEducationProps {
  (): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
