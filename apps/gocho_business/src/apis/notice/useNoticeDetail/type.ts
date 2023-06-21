import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  noticeId: number;
}

export interface ResponseObjDef {
  data: {
    id: number;
    type: string;
    title: string;
    description: string;
    view: number;
    created_time: string;
  };

  page_result: {
    prev?: {
      id: number;
      title: string;
      created_time: string;
    };
    next?: {
      id: number;
      title: string;
      created_time: string;
    };
  };
}

export const noticeDetailKeyObj = {
  all: [{ data: "noticeDetail" }] as const,
  detail: (requestObj: RequestObjDef) => [{ data: "noticeDetail", requestObj }] as const,
};

export interface GetNoticeDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof noticeDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
