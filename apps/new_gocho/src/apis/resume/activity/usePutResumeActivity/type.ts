import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";
import { PostActivityDef } from "../type";

export interface RequestObjDef extends PostActivityDef {
  resumeId: number;
  activityId: number;
}

export interface PutResumeActivityResponse {
  data: { id: number };
}

export interface PutResumeActivityDef {
  ({ resumeId, activityId, ...requestObj }: RequestObjDef): Promise<PutResumeActivityResponse>;
}

export interface UsePutResumeActivityProps {
  (): UseMutationResult<PutResumeActivityResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
