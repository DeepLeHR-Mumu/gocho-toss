import { QueryFunctionContext } from "@tanstack/react-query";

export interface ResponseObjDef {
  data: {
    keyword: string;
    company_arr: {
      id: number;
      name: string;
      logo_url: string | null;
      industry: string;
      is_bookmark: boolean;
    }[];
    business_number: string;
  }[];
}

export const companyKeywordArrKeyObj = {
  all: [{ data: "companyArrFind" }] as const,
};

export interface GetCompanyKeywordArrDef {
  ({ queryKey }: QueryFunctionContext): Promise<ResponseObjDef>;
}
