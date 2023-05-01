import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api/errorResponeType";

export interface RequestObjDef {
  companyId: number;
}

export interface AddCompanyViewCountDef {
  ({ companyId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseAddCompanyViewCountProps {
  (): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
