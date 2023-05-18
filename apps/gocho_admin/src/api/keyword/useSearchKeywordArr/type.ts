import { QueryFunctionContext } from "@tanstack/react-query";

export interface ResponseObjDef {
  data: string[];
}

export const searchKeywordArrKeyObj = {
  all: [{ data: "searchKeywordArr" }] as const,
};

export interface GetSearchKeywordArrDef {
  ({ queryKey }: QueryFunctionContext<typeof searchKeywordArrKeyObj.all>): Promise<ResponseObjDef>;
}
