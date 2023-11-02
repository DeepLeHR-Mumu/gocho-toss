import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

export interface RequestObjDef {
  dto: {
    company_id: number;
    title: string;
    detail: {
      task_main: string;
      task_sub: string[] | null;
      task_description: string;
      contract_type: string;
      conversion_rate: number | null;
      hire_number: number | null;
      pay: string;
      shift: string[];
      place: {
        is_undefined: boolean;
        data: (
          | {
              type: "일반";
              location: {
                address: string;
                x: number;
                y: number;
              };
            }
          | { type: "공장"; factory_id: number }
        )[];
        etc: "순환" | "해외" | null;
      };
    };
    qualification: {
      highschool: boolean;
      college: boolean;
      university: boolean;
      required_experience: string;
      min_year: number;
      max_year: number;
      required_etc: string | null;
      preferred_certification: string[] | null;
      preferred_etc: string | null;
    };
    apply: {
      start_time: string;
      end_time: string;
      cut: boolean;
      document: string;
      etc: string | null;
      process: string;
      route: {
        email: string | null;
        link: string | null;
        is_direct: boolean;
      };
    };
  };
}

interface axiosRequestObjDef {
  dto: {
    title: string;
    detail: {
      task_main: string;
      task_sub: string[] | null;
      task_description: string[];
      contract_type: string;
      conversion_rate: number | null;
      hire_number: number | null;
      pay: string[];
      shift: string[];
      place: {
        is_undefined: boolean;
        data: (
          | {
              type: "일반";
              location: {
                address: string;
                x: number;
                y: number;
              };
            }
          | { type: "공장"; factory_id: number }
        )[];
        etc: "순환" | "해외" | null;
      };
    };
    qualification: {
      highschool: boolean;
      college: boolean;
      university: boolean;
      required_experience: string;
      min_year: number;
      max_year: number;
      required_etc: string[] | null;
      preferred_certification: string[] | null;
      preferred_etc: string[] | null;
    };
    apply: {
      start_time: string;
      end_time: string;
      cut: boolean;
      document: string[] | null;
      etc: string[] | null;
      process: string[];
      route: {
        email: string | null;
        link: string | null;
        is_direct: boolean;
      };
    };
  };
}

export interface PostJdDef {
  (dto: axiosRequestObjDef): Promise<AxiosResponse>;
}

export interface useAddJdProps {
  (): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
