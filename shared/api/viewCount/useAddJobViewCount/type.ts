import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

export interface RequestObjDef {
  jobId: number;
}

export interface AddJdViewCountDef {
  ({ jobId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseAddJdViewCountProps {
  (): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
