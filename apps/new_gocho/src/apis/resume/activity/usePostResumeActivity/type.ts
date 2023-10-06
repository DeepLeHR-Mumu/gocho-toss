import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";
import { PostActivityDef } from "../type";

export interface RequestObjDef extends PostActivityDef {
  resumeId: number;
}

export interface PostResumeActivityResponse {
  data: { id: number };
}

export interface PostResumeActivityDef {
  ({
    resumeId,
    activity_type,
    name,
    organizer,
    activity_date,
    activity_description,
  }: RequestObjDef): Promise<PostResumeActivityResponse>;
}

export interface UsePostResumeActivityProps {
  (): UseMutationResult<PostResumeActivityResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}