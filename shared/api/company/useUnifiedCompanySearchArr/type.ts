import { QueryFunctionContext } from "@tanstack/react-query";
import { searchCompanyArrKeyObj } from "shared-constant/queryKeyFactory/company/searchCompanyArrKeyObj";
import { CompanyDef } from "../type/companyArr";

export interface JobArrResponseObjDef {
  data: CompanyDef[];
  count: number;
}

export interface GetSearchCompanyArrDef {
  ({
    queryKey,
  }: QueryFunctionContext<ReturnType<typeof searchCompanyArrKeyObj.searchArr>>): Promise<JobArrResponseObjDef>;
}
