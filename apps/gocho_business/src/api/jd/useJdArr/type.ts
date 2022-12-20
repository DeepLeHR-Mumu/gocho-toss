import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  order: "recent" | "popular" | "rand" | "view" | "end" | "com" | undefined;
  filter?: "todayUpload" | "almostDeadline" | "deadline" | "expired" | "valid";
  limit?: number;
  offset?: number;
  q?: string;
}

export interface ResponseObjDef {
  data: {
    id: number;
    company: { id: number; name: string; logo_url: string };
    status: string;
    title: string;
    cut: boolean;
    view: number;
    start_time: number;
    end_time: number;
    apply_url: string;
    task_arr: string[];
    edu_summary: string[];
    place_arr: string[];
    rotation_arr: string[];
    contract_type: string[];
    required_exp_arr: string[];
  }[];
  count: number;
}

export const jdArrKeyObj = {
  all: [{ data: "jdArr" }] as const,
  arr: (requestObj: RequestObjDef) => [{ data: "jdArr", requestObj }] as const,
};

export interface GetJdArrDef {
  ({ queryKey }: QueryFunctionContext): Promise<ResponseObjDef>;
}
