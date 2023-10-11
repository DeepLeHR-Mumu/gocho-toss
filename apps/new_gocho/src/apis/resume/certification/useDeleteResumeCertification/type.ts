import { AxiosError, AxiosResponse } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

export interface RequestObjDef {
  resumeId: number;
  certificationId: number;
}

export interface DeleteResumeCertificationDef {
  ({ resumeId, certificationId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseDeleteResumeCertificationProps {
  (): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
