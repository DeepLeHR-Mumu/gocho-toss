import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";
import { PostExtraDef } from "../type";

export interface RequestObjDef extends PostExtraDef {
  resumeId: number;
}

export interface PostResumeExtraResponse {
  data: { id: number };
}

export interface PostResumeExtraDef {
  ({ resumeId, ...requestObj }: RequestObjDef): Promise<PostResumeExtraResponse>;
}

export interface UsePostResumeExtraProps {
  (): UseMutationResult<PostResumeExtraResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
