import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

export interface RequestObjDef {
  managerId: number;
  certification: File;
  logo?: File;
  backgroundImage?: File;
  dto?: {
    industry: string[];
    employee_number: number;
    location: {
      address: string;
      x: number;
      y: number;
    };
    intro: string;
    size: string;
    found_date: string;
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
}

export const managerAuthKeyObj = {
  all: [{ data: "managerAuth" }] as const,
};

export interface PostMaganersAuthDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}

export interface useManagerAuthProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
