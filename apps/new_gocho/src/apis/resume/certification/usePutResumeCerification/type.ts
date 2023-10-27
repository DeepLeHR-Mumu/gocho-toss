import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";
import { PostCertificationDef } from "../type";

export interface RequestObjDef extends PostCertificationDef {
  resumeId: number;
  certificationId: number;
}

export interface PutResumeCertificationResponse {
  data: { id: number };
}

export interface PutResumeCertificationDef {
  ({ resumeId, certificationId, ...requestObj }: RequestObjDef): Promise<PutResumeCertificationResponse>;
}

export interface UsePutResumeCertificationProps {
  (): UseMutationResult<PutResumeCertificationResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
