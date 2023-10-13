import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

export interface RequestObjDef {
  noticeId: number;
}

export interface AddNoticeViewDef {
  ({ noticeId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseAddNoticeViewProps {
  (): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
