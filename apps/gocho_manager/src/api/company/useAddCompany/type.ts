import { ResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  name: string;
  file_id: number;
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
    money: string;
    health: string;
    life: string;
    holiday: string;
    facility: string;
    vacation: string;
    growth: string;
    etc: string;
  };

  nozo: {
    exists: boolean;
    desc: string;
  };

  factories: {
    factory_name: string;
    address: string;
    male_number: number;
    female_number: number;
    product: string;
    bus_bool: boolean;
    bus_etc: string;
    dormitory_bool: boolean;
    dormitory_etc: string;
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
  }: RequestObjDef): Promise<ResponseDef>;
}

export interface useAddCompanyProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
