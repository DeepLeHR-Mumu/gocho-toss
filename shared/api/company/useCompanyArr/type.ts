import { QueryFunctionContext } from "@tanstack/react-query";
import { companyArrKeyObj } from "shared-constant/queryKeyFactory/company/arrKeyObj";
import { CompanyDef, PageResultDef } from "../type/companyArr";

export interface CompanyArrResponseObjDef {
  data: CompanyDef[];
  page_result: PageResultDef;
}

export interface GetCompanyArrDef {
  ({
    queryKey,
  }: QueryFunctionContext<ReturnType<typeof companyArrKeyObj.companyArr>>): Promise<CompanyArrResponseObjDef>;
}
