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
        status: {
          name: "진행중" | "등록대기" | "수정대기" | "등록반려" | "수정반려";
          reason: string[];
        };
        uploader: {
          name: string;
          is_mine: boolean;
        };
        title: string;
        cut: boolean;
        start_time: string;
        end_time: string;
        created_time: string;
        updated_time: string | null;
        bookmark: number;
        total_applicant: number;
        unread_applicant: number;
        view: number;
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
