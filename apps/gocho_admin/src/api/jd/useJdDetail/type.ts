import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  id: number | null;
}

export interface ResponseObjDef {
  data: {
    id: number;
    title: string;
    company: {
      id: number;
      name: string;
      logo_url: string;
    };
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
        data: {
          id: number;
          type: "일반" | "공장";
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
        }[];
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
      required_etc: string[];
      preferred_certification: string[] | null;
      preferred_etc: string[];
    };
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
        is_direct: boolean;
      };
    };
  };
}

export const jdDetailKeyObj = {
  all: [{ data: "jdDetail" }] as const,
  detail: (requestObj: RequestObjDef) => [{ data: "jdDetail", requestObj }] as const,
};

export interface GetJdDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jdDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
