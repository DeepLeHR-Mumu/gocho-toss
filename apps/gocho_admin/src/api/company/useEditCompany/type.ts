import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number;
  dto: {
    name: string;
    business_number: number;
    youtube_url: string | null;
    industry: string;
    size: string;
    employee_number: number;
    found_date: string;
    location: {
      address: string;
      x: number;
      y: number;
    };
    intro: string;
    pay_avg: number | null;
    pay_start: number | null;
    pay_desc: string | null;
    welfare: {
      money: string | null;
      health: string | null;
      life: string | null;
      holiday: string | null;
      facility: string | null;
      vacation: string | null;
      growth: string | null;
      etc: string | null;
    };

    nozo: {
      exists: boolean;
      desc: string | null;
    };

    factory_arr: {
      id: number | null;
      factory_name: string;
      address: string;
      male_number: number;
      female_number: number;
      product: string;
      bus_bool: boolean;
      bus_etc: string | null;
      dormitory_bool: boolean;
      dormitory_etc: string | null;
    }[];
  };
  logo?: File;
  bgImage?: File;
}

export interface axiosRequestObjDef {
  companyId: number;
  dto: {
    name: string;
    business_number: number;
    youtube_url: string | null;
    industry: string;
    size: string;
    employee_number: number;
    found_date: string;
    location: {
      address: string;
      x: number;
      y: number;
    };
    intro: string;
    pay_avg: number | null;
    pay_start: number | null;
    pay_desc: string | null;
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

    nozo: {
      exists: boolean;
      desc: string | null;
    };

    factory_arr: {
      id: number | null;
      factory_name: string;
      address: string;
      male_number: number;
      female_number: number;
      product: string;
      bus_bool: boolean;
      bus_etc: string | null;
      dormitory_bool: boolean;
      dormitory_etc: string | null;
    }[];
  };
  logo?: File;
  bgImage?: File;
}

export interface EditCompanyDef {
  ({ companyId, dto, logo, bgImage }: axiosRequestObjDef): Promise<AdminResponseDef>;
}

export interface useEditCompanyProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
