import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  id: number | null;
}

export interface ResponseObjDef {
  data: {
    id: number;
    apply: {
      start_time: string;
      end_time: string;
      cut: boolean;
      document: string[];
      etc: string[];
      process: string[];
      route: {
        email: string | null;
        link: string | null;
        type: "고초대졸닷컴으로 지원받기" | "외부 링크" | "이메일 지원";
      }[];
    };
    status: {
      name: "진행중" | "등록대기" | "수정대기" | "등록반려" | "수정반려";
      reason: string[];
    };
    uploader: {
      name: string;
      is_mine: boolean;
    };
    title: string;
    detail: {
      task_main: string;
      task_sub_arr: string[];
      task_description: string[];
      contract_type: string;
      conversion_rate?: number;
      hire_number: number;
      pay: string[];
      rotation: string[];
      place: [
        {
          type: string;
          location?: {
            address: string;
            x: number;
            y: number;
          };
          factory?: {
            id: number;
            name: string;
            address: string;
          };
          etc: string | null;
        }
      ];
    };
    qualification: {
      highschool: boolean;
      college: boolean;
      university: boolean;
      required_experience: string;
      required_min_year: number | null;
      required_max_year: number | null;
      required_etc: string[];
      preferred_certification: string[];
      preferred_etc: string[];
    };
    created_time: string;
  };
}

export const jdDetailKeyObj = {
  all: [{ data: "jdDetail" }] as const,
  detail: (requestObj: RequestObjDef) => [{ data: "jdDetail", requestObj }] as const,
};

export interface GetJdDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jdDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
