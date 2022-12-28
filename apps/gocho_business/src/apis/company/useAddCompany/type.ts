import { AxiosError, AxiosResponse } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number;
  dto: {
    youtube_url: string;
    employee_number: number;
    address: string;
    intro: string;
    welfare: {
      money: string[] | null;
      health: string[] | null;
      life: string[] | null;
      holiday: string[] | null;
      facility: string[] | null;
      vacation: string[] | null;
      growth: string[] | null;
      etc: string[] | null;
    };
    pay_avg: number;
    pay_start: number;
    pay_desc: string | null;
    nozo: {
      exists: boolean;
      desc: string | null;
    };
  };
}

export interface PutCompanyDetailDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}

export interface useCompanyDetailProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
