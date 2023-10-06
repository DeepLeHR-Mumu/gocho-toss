import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";
import { PostExtrasDef } from "../type";

export interface RequestObjDef extends PostExtrasDef {
  resumeId: number;
}

export interface PostResumeExtraResponse {
  data: { id: number };
}

export interface PostResumeExtraDef {
  ({
    resumeId,
    name,
    graduate_type,
    start_date,
    end_date,
    major,
    grade,
    max_grade,
    etc,
  }: RequestObjDef): Promise<PostResumeExtraResponse>;
}

export interface UsePostResumeExtraProps {
  (): UseMutationResult<PostResumeExtraResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
