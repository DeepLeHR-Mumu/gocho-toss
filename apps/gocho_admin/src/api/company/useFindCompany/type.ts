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

export const companyArrFindKeyObj = {
  all: [{ data: "companyArrFind" }] as const,
  find: (requestObj: RequestObjDef) => {
    return [{ data: "companyArrFind", requestObj }] as const;
  },
};

export interface GetCompanyArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof companyArrFindKeyObj.find>>): Promise<ResponseObjDef>;
}
