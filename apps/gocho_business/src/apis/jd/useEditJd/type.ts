import { AxiosError, AxiosResponse } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  jdId: number;
  dto: {
    company_id: number;
    title: string;
    start_time: number;
    end_time: number;
    cut: boolean;
    process_arr: string[];
    apply_route_arr: string[];
    apply_url: string;
    etc_arr: string[] | null;
    position_arr: {
      middle: boolean;
      high: boolean;
      college: boolean;
      four: boolean;
      required_exp: string;
      min_year: number | null;
      max_year: number | null;
      required_etc_arr: string[] | null;
      contract_type: string;
      conversion_rate: number | null;
      task_main: string;
      task_sub_arr: string[] | null;
      task_detail_arr: string[];
      rotation_arr: string[];
      place: {
        type: string;
        address_arr: string[] | null;
        factory_arr: number[] | null;
        etc: string | null;
      };
      hire_number: number;
      pay_arr: string[];
      preferred_certi_arr: string[] | null;
      preferred_etc_arr: string[] | null;
    }[];
  };
}

export interface PostEditJdDef {
  ({ jdId, dto }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useEditJdProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
