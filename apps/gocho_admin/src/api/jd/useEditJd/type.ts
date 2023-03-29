import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "shared-type/api/responseType";
import { ErrorResponseDef } from "@/types";

export interface RequestObjDef {
  jdId: number;
  dto: {
    company_id: number;
    title: string;
    start_time: string;
    end_time: string;
    cut: boolean;
    process_arr: string;
    apply_route_arr: string;
    apply_url: string;
    etc_arr: string | null;
    position_arr: {
      id: number | null;
      middle: boolean;
      high: boolean;
      college: boolean;
      four: boolean;
      required_exp: string;
      min_year: number | null;
      max_year: number | null;
      required_etc_arr: string | null;
      contract_type: string;
      conversion_rate: number | null;
      task_main: string;
      task_sub_arr: string[];
      task_detail_arr: string;
      rotation_arr: string[] | null;
      place: {
        type: string;
        address_arr: string[] | null;
        factory_arr: number[] | null;
        etc: string | null;
      };
      hire_number: number;
      pay_arr: string;
      preferred_certi_arr: string[] | null;
      preferred_etc_arr: string | null;
    }[];
  };
}

interface axiosRequestObjDef {
  jdId: number;
  dto: {
    company_id: number;
    title: string;
    start_time: number | string;
    end_time: number | string;
    cut: boolean;
    process_arr: string[];
    apply_route_arr: string[];
    apply_url: string;
    etc_arr: string[] | null;
    position_arr: {
      id: number | null;
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
      task_sub_arr: string[];
      task_detail_arr: string[];
      rotation_arr: string[] | null;
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
  ({ jdId, dto }: axiosRequestObjDef): Promise<AdminResponseDef>;
}

export const jdDetailKeyObj = {
  all: [{ data: "jdDetail" }] as const,
  detail: (requestObj: RequestObjDef) => [{ data: "jdDetail", requestObj }] as const,
};

export interface useEditJdProps {
  (): UseMutationResult<AdminResponseDef, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
