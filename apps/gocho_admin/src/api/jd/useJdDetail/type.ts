import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  id: number | null;
}

export interface ResponseObjDef {
  data: {
    id: number;
    title: string;
    cut: boolean;
    start_time: number;
    end_time: number;
    process_arr: string[];
    apply_route_arr: string[];
    apply_url: string;
    etc_arr: string[];
    position_arr: {
      id: number;
      edu_summary: {
        middle: boolean;
        high: boolean;
        college: boolean;
        four: boolean;
      };
      required_exp: {
        type: "신입" | "경력" | "무관" | "신입/경력";
        max_year: number | null;
        min_year: number | null;
      };
      required_etc_arr: string[] | null;
      contract_type: {
        type: "정규직" | "계약직" | "계약>정규" | "연수생" | "인턴";
        conversion_rate: number | null;
      };
      task: {
        main_task: string;
        sub_task_arr: string[];
      };
      task_detail_arr: string[];
      rotation_arr: string[];
      rotation_etc: string;
      place: {
        type: "일반" | "전국" | "해외" | "기타";
        address_arr: string[] | null;
        factory_arr:
          | {
              id: number;
              address: string;
              name: string;
            }[]
          | null;
        etc: string | null;
      };
      hire_number: number;
      pay_arr: string[] | null;
      preferred_certi_arr: string[];
      preferred_etc_arr: string[] | null;
    }[];
    company: {
      id: number;
      name: string;
      logo_url: string;
      factories: {
        id: number;
        address: string;
        name: string;
      }[];
    };
  };
}

export const jdDetailKeyObj = {
  all: [{ data: "jdDetail" }] as const,
  detail: (requestObj: RequestObjDef) => {
    return [{ data: "jdDetail", requestObj }] as const;
  },
};

export interface GetJdDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jdDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
