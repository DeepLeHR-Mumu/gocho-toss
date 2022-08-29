import { QueryFunctionContext } from "@tanstack/react-query";
import { companyArrKeyObj } from "@constant/queryKeyFactory/company/arrKeyObj";
import { CompanyDef } from "../type/companyArr";

interface ResponseObjDef {
  data: CompanyDef[];
}

export interface GetCompanyArrDef {
  ({
    queryKey,
  }: QueryFunctionContext<
    ReturnType<typeof companyArrKeyObj.companyArr>
  >): Promise<ResponseObjDef>;
}
