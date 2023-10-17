import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";
import { PostHighSchoolDef } from "../type";

export interface RequestObjDef extends PostHighSchoolDef {
  resumeId: number;
}

export interface PostResumeHighSchoolResponse {
  data: { id: number };
}

export interface PostResumeHighSchoolDef {
  ({ resumeId, ...requestObj }: RequestObjDef): Promise<PostResumeHighSchoolResponse>;
}

export interface UsePostResumeHighSchoolProps {
  (): UseMutationResult<PostResumeHighSchoolResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
