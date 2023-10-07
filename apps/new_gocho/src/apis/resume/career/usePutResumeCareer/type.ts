import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";
import { PostCareerDef } from "../type";

export interface RequestObjDef extends PostCareerDef {
  resumeId: number;
  careerId: number;
}

export interface PutResumeCareerResponse {
  data: { id: number };
}

export interface PutResumeCareerDef {
  ({
    resumeId,
    careerId,
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
  }: RequestObjDef): Promise<PutResumeCareerResponse>;
}

export interface UsePostResumeCareerProps {
  (): UseMutationResult<PutResumeCareerResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
