import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";

export interface RequestObjDef {
  order?: "recent" | "popular" | "rand" | "view" | "end" | "com";
  filter?: "todayUpload" | "almostDeadline" | "deadline" | "expired" | "valid" | "progress" | "waiting" | "reject";
  size?: number;
  page?: number;
  search?: string | null;
  mine?: boolean | null;
}

export interface ResponseObjDef {
  data:
    | {
        id: number;
        uploader: { name: string; department: string; is_mine: boolean };
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
        created_time: string;
        updated_time: string;
        apply_url: string;
        task: string;
      }[]
    | [];
  page_result: PageResultDef;
}

export const jdArrKeyObj = {
  all: [{ data: "jdArr" }] as const,
  arr: (requestObj: RequestObjDef) => [{ data: "jdArr", requestObj }] as const,
};

export interface GetJdArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jdArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
