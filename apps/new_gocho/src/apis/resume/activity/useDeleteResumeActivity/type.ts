import { AxiosError, AxiosResponse } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

export interface RequestObjDef {
  resumeId: number;
  activityId: number;
}

export interface DeleteResumeActivityDef {
  ({ resumeId, activityId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseDeleteResumeActivityProps {
  (resumeId: number): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
