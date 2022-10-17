import { AdminResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  company_id: number;
  title: string;
  start_time: number;
  end_time: number;
  cut: boolean;
  process_arr: string[];
  apply_route_arr: string[];
  apply_url: string;
  etc_arr: string[];
  position_arr: {
    middle: boolean;
    high: boolean;
    college: boolean;
    four: boolean;
    required_exp: string;
    min_year: number | undefined;
    max_year: number | undefined;
    required_etc_arr: string[] | undefined;
    contract_type: string;
    conversion_rate: number | undefined;
    task_main: string;
    task_sub_arr: string[] | undefined;
    task_detail_arr: string[] | undefined;
    rotation_arr: string[] | undefined;
    rotation_etc: string;
    place: {
      type: string;
      address_arr: string[];
      factory_arr: number[];
      etc: string;
    };
    hire_number: number | undefined;
    pay_arr: string[] | undefined;
    preferred_certi_arr: string[] | undefined;
    preferred_etc_arr: string[] | undefined;
  }[];
}

export interface PostJobDef {
  ({
    company_id,
    title,
    start_time,
    end_time,
    cut,
    process_arr,
    apply_route_arr,
    apply_url,
    etc_arr,
    position_arr,
  }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddJobProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
