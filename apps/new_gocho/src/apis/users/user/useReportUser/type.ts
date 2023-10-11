import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export interface RequestObjDef {
  userId: number;
  reason: string;
}

export interface ReportUserDef {
  ({ userId }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseReportUserProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
