import { QueryFunctionContext } from "@tanstack/react-query";

export interface ResponseObjDef {
  data: {
    keyword: string;
    company_arr: {
      id: number;
      name: string;
      logo_url: string;
    }[];
  }[];
}

export const companyKeywordArrKeyObj = {
  all: [{ data: "companyKeywordArr" }] as const,
};

export interface GetCompanyKeywordArrDef {
  ({ queryKey }: QueryFunctionContext<typeof companyKeywordArrKeyObj.all>): Promise<ResponseObjDef>;
}
