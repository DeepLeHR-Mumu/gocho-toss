import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { PostExtraDef } from "../type";

export interface RequestObjDef extends PostExtraDef {
  resumeId: number;
  extraId: number;
}

export interface PutResumeExtraResponse {
  data: { id: number };
}

export interface PutResumeExtraDef {
  ({
    resumeId,
    extraId,
    name,
    graduate_type,
    start_date,
    end_date,
    major,
    grade,
    max_grade,
    etc,
  }: RequestObjDef): Promise<PutResumeExtraResponse>;
}

export interface UsePutResumeExtraProps {
  (): UseMutationResult<PutResumeExtraResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
