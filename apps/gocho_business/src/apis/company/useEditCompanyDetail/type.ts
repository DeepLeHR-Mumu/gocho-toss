import { AxiosError, AxiosResponse } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number;
  dto: {
    logo_url: string;
    background_image_url: string;
    manager_id: number;
    industry: string[];
    employee_number: number;
    location: {
      address: string;
      x: number;
      y: number;
    };
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
    factory_arr: {
      id?: number;
      factory_name: string;
      product: string;
      address: string;
      male_number: number;
      female_number: number;
      bus_bool: boolean;
      bus_etc: string | null;
      dormitory_bool: boolean;
      dormitory_etc: string | null;
    }[];
  };
  logo?: File;
  bgImage?: File;
}

export const companyDetailKeyObj = {
  all: [{ data: "companyDetail" }] as const,
};

export interface PutCompanyDetailDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}

export interface useCompanyDetailProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
