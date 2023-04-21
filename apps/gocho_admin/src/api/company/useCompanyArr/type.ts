import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";

export interface RequestObjDef {
  q?: string;
  page?: number;
  size?: number;
  status?: "all" | "upload-waiting" | "modify-waiting" | "upload-reject" | "modify-reject";
  order: "recent" | "comment" | "name" | "popular" | "rand" | "view" | undefined;
  word?: string;
}

export interface ResponseObjDef {
  data: {
    id: number;
    status: {
      name: string;
      reason: string | null;
    };
    name: string;
    logo_url: string;
    comment_count: number;
  }[];
  page_result: PageResultDef;
}

export const companyArrKeyObj = {
  all: [{ data: "companyArr" }] as const,
  arr: (requestObj: RequestObjDef) => [{ data: "companyArr", requestObj }] as const,
};

export interface GetCompanyArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof companyArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
