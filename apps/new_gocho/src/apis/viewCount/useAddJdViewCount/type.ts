import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

export interface RequestObjDef {
  jdId: number;
}

export interface AddJdViewCountDef {
  ({ jdId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseAddJdViewCountProps {
  (): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
