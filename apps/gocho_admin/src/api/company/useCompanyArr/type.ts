import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  q?: string;
  limit?: number;
  offset?: number;
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
