import { AxiosError, AxiosResponse } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

export interface RequestObjDef {
  resumeId: number;
  certificationId: number;
}

export interface DeleteResumeCertificationDef {
  ({ resumeId, certificationId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseDeleteResumeCertificationProps {
  (resumeId: number): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
