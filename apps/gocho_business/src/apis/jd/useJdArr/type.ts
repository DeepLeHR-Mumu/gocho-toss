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
    uploader: { name: string; department: string; is_mine: boolean };
    company: { id: number; name: string; logo_url: string };
    status: {
      name: "진행중" | "등록대기" | "수정대기" | "등록반려" | "수정반려";
      reason: string;
    };
    title: string;
    cut: boolean;
    view: number;
    bookmark: number;
    click: number;
    start_time: number;
    end_time: number;
    created_time: number;
    updated_time: number;
    apply_url: string;
    task_arr: string[];
  }[];
  count: number;
}

export const jdArrKeyObj = {
  all: [{ data: "jdArr" }] as const,
  arr: (requestObj: RequestObjDef) => [{ data: "jdArr", requestObj }] as const,
};

export interface GetJdArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jdArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
