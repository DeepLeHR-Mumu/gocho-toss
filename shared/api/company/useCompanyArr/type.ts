import { QueryFunctionContext } from "@tanstack/react-query";
import { companyArrKeyObj } from "shared-constant/queryKeyFactory/company/arrKeyObj";
import { CompanyDef } from "../type/companyArr";

export interface CompanyArrResponseObjDef {
  data: CompanyDef[];
  count: number;
}

export interface GetCompanyArrDef {
  ({
    queryKey,
  }: QueryFunctionContext<ReturnType<typeof companyArrKeyObj.companyArr>>): Promise<CompanyArrResponseObjDef>;
}
