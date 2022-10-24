import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  name: string;
  file_id: string;
  business_number: number;
  catch_url: string;
  youtube_url: string;
  industry: string;
  size: string;
  employee_number: number;
  found_date: number;
  address: string;
  intro: string;
  pay_avg: number;
  pay_start: number;
  pay_desc: string;
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

  factories: {
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
}

export interface PostCompanyDef {
  ({
    name,
    file_id,
    business_number,
    catch_url,
    youtube_url,
    industry,
    size,
    employee_number,
    found_date,
    address,
    intro,
    pay_avg,
    pay_start,
    pay_desc,
    welfare,
    nozo,
    factories,
  }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddCompanyProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
