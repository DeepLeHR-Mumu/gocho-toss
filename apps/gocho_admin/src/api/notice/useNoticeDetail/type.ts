import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  noticeId: number;
}

export interface ResponseObjDef {
  data: {
    id: number;
    uploader: {
      id: number;
      nickname: string;
      image: string;
    };
    type: string;
    title: string;
    description: string;
    view: number;
    created_time: string;
  };
}

export const noticeDetailKeyObj = {
  all: [{ data: "noticeDetail" }] as const,
  detail: (requestObj: RequestObjDef) => [{ data: "noticeDetail", requestObj }] as const,
};

export interface GetNoticeDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof noticeDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
