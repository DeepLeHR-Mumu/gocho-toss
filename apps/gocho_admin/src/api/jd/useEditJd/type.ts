import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ErrorResponseDef } from "shared-type/api";

export interface RequestObjDef {
  jdId: number;
  dto: {
    id: number;
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
  jdId: number;
  dto: {
    id: number;
    company_id: number;
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

export interface PostEditJdDef {
  ({ jdId, dto }: axiosRequestObjDef): Promise<AxiosResponse>;
}

export const jdDetailKeyObj = {
  all: [{ data: "jdDetail" }] as const,
  detail: (requestObj: RequestObjDef) => [{ data: "jdDetail", requestObj }] as const,
};

export interface useEditJdProps {
  (): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
