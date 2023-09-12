import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";

import { userCompanyHistoriesArrKeyObj } from "@/constants/queryKeyFactory/company/companyHistoriesKeyObj";

export interface CompanyHistoriesArr {
  id: number;
  name: string;
  logo_url: string;
  size: string;
  industry: string;
  is_bookmark: boolean;
}

export interface ResponseObjDef {
  data: CompanyHistoriesArr[];
  page_result: PageResultDef;
}

export interface GetUserCompanyHistoriesDef {
  (
    requestObj: QueryFunctionContext<ReturnType<typeof userCompanyHistoriesArrKeyObj.companyHistoriesArr>>
  ): Promise<ResponseObjDef>;
}
