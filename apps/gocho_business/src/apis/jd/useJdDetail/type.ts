import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  id: number | null;
}

export interface ResponseObjDef {
  data: {
    id: number;
    status: {
      name: "진행중" | "등록대기" | "수정대기" | "등록반려" | "수정반려";
      reason: string;
    };
    title: string;
    cut: boolean;
    view: number;
    bookmark: number;
    click: number;
    start_time: string;
    end_time: string;
    process_arr: string[];
    apply_route_arr: string[];
    apply_document_arr: string[];
    apply_url: string;
    etc_arr: string[];
    education: {
      high: boolean;
      college: boolean;
      four: boolean;
    };
    career: {
      type: "신입" | "경력" | "무관" | "신입/경력";
      max_year: number | null;
      min_year: number | null;
    };
    required_etc_arr: string[] | null;
    contract: {
      type: "정규직" | "계약직" | "계약>정규" | "연수생" | "인턴";
      conversion_rate: number | null;
    };
    task: {
      task_main: string;
      task_sub_arr: string[];
      task_detail_arr: string[];
    };
    rotation_arr: string[];
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
    preferred_certi_arr: string[] | null;
    preferred_etc_arr: string[] | null;
  };
}

export const jdDetailKeyObj = {
  all: [{ data: "jdDetail" }] as const,
  detail: (requestObj: RequestObjDef) => [{ data: "jdDetail", requestObj }] as const,
};

export interface GetJdDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jdDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
