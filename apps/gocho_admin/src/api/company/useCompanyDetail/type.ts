import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { CompanyDetailObjDef } from "../type";

interface ResponseObjDef {
  data: CompanyDetailObjDef;
}

export interface GetCompanyDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof companyDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
