import { AxiosError, AxiosResponse } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

export interface RequestObjDef {
  resumeId: number;
  careerId: number;
}

export interface DeleteResumeCareerDef {
  ({ resumeId, careerId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseDeleteResumeCareerProps {
  (): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
