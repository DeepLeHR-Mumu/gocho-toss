import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";
import { PostCertificationDef } from "../type";

export interface RequestObjDef extends PostCertificationDef {
  resumeId: number;
}

export interface PostResumeCertificationResponse {
  data: { id: number };
}

export interface PostResumeCertificationDef {
  ({ resumeId, name, issuing_authority, acquisition_date }: RequestObjDef): Promise<PostResumeCertificationResponse>;
}

export interface UsePostResumeCertificationProps {
  (): UseMutationResult<PostResumeCertificationResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
