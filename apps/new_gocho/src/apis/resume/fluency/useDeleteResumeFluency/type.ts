import { AxiosError, AxiosResponse } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

export interface RequestObjDef {
  resumeId: number;
  fluencyId: number;
}

export interface DeleteResumeFluencyDef {
  ({ resumeId, fluencyId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseDeleteResumeFluencyProps {
  (): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
