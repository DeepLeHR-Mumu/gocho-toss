import { QueryFunctionContext } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ErrorResponseDef } from "@/types/errorType";

export interface ResponseObjDef {
  data: {
    id: number;
    status: {
      name: "진행중";
      reason: null;
    };
    logo_url: string;
    name: string;
    business_number: number;
    catch_url: number;
    youtube_url: null | string;
    industry: string;
    size: string;
    employee_number: number;
    found_date: number;
    address: string;
    intro: string;
    pay_avg: number;
    pay_start: number;
    pay_desc: null | string;
    bookmark: number;
    view: number;
    welfare: {
      money: string[];
      health: string[];
      life: string[];
      holiday: string[] | null;
      facility: string[] | null;
      vacation: string[] | null;
      growth: string[] | null;
      etc: string[] | null;
    };
    nozo: {
      exists: boolean;
      desc: null | string;
    };
    factory_arr: {
      id: number;
      company_id: number;
      name: string;
      address: null;
      male_number: null;
      female_number: null;
      product: null;
      bus: {
        exists: null;
        desc: null;
      };
      dormitory: {
        exists: null;
        desc: null;
      };
    }[];
  };
}

export interface RequestObjDef {
  isLogin: boolean;
  companyId: number;
}

export const companyInfoKeyObj = {
  all: [{ data: "companyInfo" }] as const,
};

export interface GetCompanyInfoDef {
  ({ queryKey }: QueryFunctionContext): Promise<AxiosResponse<ResponseObjDef> | AxiosError<ErrorResponseDef>>;
}
