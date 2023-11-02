import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";

export interface RequestObjDef {
  order: "recent" | "popular" | "rand" | "view" | "end" | "com" | undefined;
  size?: number;
  page?: number;
  q?: string;
  userId?: string;
  filter?:
    | "todayUpload"
    | "almostDeadline"
    | "deadline"
    | "expired"
    | "valid"
    | "viral"
    | "all"
    | "upload-waiting"
    | "modify-waiting"
    | "upload-reject"
    | "modify-reject";
  parsing?: "full" | "raw";
  companyId?: number;
}

export interface ResponseObjDef {
  data: {
    id: number;
    company: { id: number; name: string; logo_url: string };
    title: string;
    start_time: string;
    end_time: string;
    cut: boolean;
    view: number;
    apply_url: string;
    edu_summary: string;
    required_exp: string;
    place_arr: string[];
    shift: string[];
    contract_type: string;
    task: string;
  }[];
  page_result: PageResultDef;
}

export const jdArrKeyObj = {
  all: [{ data: "jdArr" }] as const,
  arr: (requestObj: RequestObjDef) => [{ data: "jdArr", requestObj }] as const,
};

export interface GetJdArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jdArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
