import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";

import { userCompanyHistoryArrKeyObj } from "@/constants/queryKeyFactory/company/companyHistoryKeyObj";

export interface CompanyHistoryArr {
  id: number;
  name: string;
  logo_url: string;
  size: string;
  industry: string[];
  is_bookmark: boolean;
}

export interface ResponseObjDef {
  data: CompanyHistoryArr[];
  page_result: PageResultDef;
}

export interface GetUserCompanyHistoryDef {
  (
    requestObj: QueryFunctionContext<ReturnType<typeof userCompanyHistoryArrKeyObj.companyHistoryArr>>
  ): Promise<ResponseObjDef>;
}
