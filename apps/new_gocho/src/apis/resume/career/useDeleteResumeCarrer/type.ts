import { AxiosError, AxiosResponse } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

export interface RequestObjDef {
  resumeId: number;
  careerId: number;
}

export interface DeleteResumeCarrerDef {
  ({ resumeId, careerId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseDeleteResumeCarrerProps {
  (): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
