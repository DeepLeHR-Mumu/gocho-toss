import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";

export interface RequestObjDef {
  order?: "recent" | "notice";
  size?: number;
  page?: number;
}

export interface ResponseObjDef {
  data: {
    id: number;
    type: string;
    title: string;
    description: string;
    view: number;
    created_time: string;
  }[];
  page_result: PageResultDef;
}

export const noticeArrKeyObj = {
  all: [{ data: "noticeArr" }] as const,
  arr: (requestObj: RequestObjDef) => [{ data: "noticeArr", requestObj }] as const,
};

export interface GetNoticeArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof noticeArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
