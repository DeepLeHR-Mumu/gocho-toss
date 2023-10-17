import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";
import { PostCertificationDef } from "../type";

export interface RequestObjDef extends PostCertificationDef {
  resumeId: number;
}

export interface PostResumeCertificationResponse {
  data: { id: number };
}

export interface PostResumeCertificationDef {
  ({ resumeId, ...requestObj }: RequestObjDef): Promise<PostResumeCertificationResponse>;
}

export interface UsePostResumeCertificationProps {
  (resumeId: number): UseMutationResult<PostResumeCertificationResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
