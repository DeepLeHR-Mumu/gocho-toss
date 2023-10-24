import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

import { PostHighSchoolDef } from "../type";

export interface RequestObjDef extends PostHighSchoolDef {
  resumeId: number;
  highschoolId: number;
}

export interface PutResumeHighSchoolResponse {
  data: { id: number };
}

export interface PutResumeHighSchoolDef {
  ({ resumeId, highschoolId, ...requestObj }: RequestObjDef): Promise<PutResumeHighSchoolResponse>;
}

export interface UsePutResumeHighSchoolProps {
  (resumeId: number): UseMutationResult<PutResumeHighSchoolResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
