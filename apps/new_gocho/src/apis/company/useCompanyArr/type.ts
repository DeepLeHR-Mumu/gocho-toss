import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";
import { companyArrKeyObj } from "@/constants/queryKeyFactory/company/arrKeyObj";

import { CompanyDef } from "../type/companyArr";

export interface CompanyArrResponseObjDef {
  data: CompanyDef[];
  page_result: PageResultDef;
}

export interface GetCompanyArrDef {
  ({
    queryKey,
  }: QueryFunctionContext<ReturnType<typeof companyArrKeyObj.companyArr>>): Promise<CompanyArrResponseObjDef>;
}
