import { QueryFunctionContext } from "@tanstack/react-query";

import { companyArrKeyObj } from "../keyFactory";

export interface CompanyObjDef {
  id: number;
  name: string;
  logo_url: string;
  comment_count: number;
}

export interface ResponseObjDef {
  data: CompanyObjDef[];
  count: number;
}

export interface GetCompanyArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof companyArrKeyObj.companyArr>>): Promise<ResponseObjDef>;
}
