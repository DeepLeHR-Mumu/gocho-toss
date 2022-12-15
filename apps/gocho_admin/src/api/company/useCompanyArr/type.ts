import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  q?: string;
  limit?: number;
  offset?: number;
  order: "recent" | "comment" | "name" | "popular" | "rand" | "view" | undefined;
  word?: string;
}

interface CompanyObjDef {
  id: number;
  name: string;
  logo_url: string;
  comment_count: number;
}

export interface ResponseObjDef {
  data: CompanyObjDef[];
  count: number;
}

export const companyArrKeyObj = {
  all: [{ data: "companyArr" }] as const,
  arr: (requestObj: RequestObjDef) => {
    return [{ data: "companyArr", requestObj }] as const;
  },
};

export interface GetCompanyArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof companyArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
