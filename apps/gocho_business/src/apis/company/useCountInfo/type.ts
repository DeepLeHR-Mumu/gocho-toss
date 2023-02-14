import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number | undefined;
}
export interface ResponseObjDef {
  data: {
    comment_count: number;
    bookmark: number;
    view: number;
  };
}

export const countInfoKeyObj = {
  all: [{ data: "countInfo" }] as const,
  detail: (requestObj: RequestObjDef) => [{ data: "countInfo", requestObj }] as const,
};

export interface GetCountInfoDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof countInfoKeyObj.detail>>): Promise<ResponseObjDef>;
}
