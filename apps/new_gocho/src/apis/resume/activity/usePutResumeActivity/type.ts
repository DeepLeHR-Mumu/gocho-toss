import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";
import { PostActivityDef } from "../type";

export interface RequestObjDef extends PostActivityDef {
  resumeId: number;
  activityId: number;
}

export interface PutResumeActivityResponse {
  data: { id: number };
}

export interface PutResumeActivityDef {
  ({
    resumeId,
    activityId,
    activity_type,
    name,
    organizer,
    activity_date,
    activity_description,
  }: RequestObjDef): Promise<PutResumeActivityResponse>;
}

export interface UsePutResumeActivityProps {
  (): UseMutationResult<PutResumeActivityResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
