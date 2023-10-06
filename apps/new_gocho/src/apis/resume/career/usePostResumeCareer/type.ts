import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";
import { PostCareerDef } from "../type";

export interface RequestObjDef extends PostCareerDef {
  resumeId: number;
}

export interface PostResumeCareerResponse {
  data: { id: number };
}

export interface PostResumeCareerDef {
  ({
    resumeId,
    name,
    is_working,
    start_date,
    end_date,
    contract_type,
    department,
    position,
    job_description,
    pay,
    retire_description,
  }: RequestObjDef): Promise<PostResumeCareerResponse>;
}

export interface UsePostResumeCareerProps {
  (): UseMutationResult<PostResumeCareerResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
