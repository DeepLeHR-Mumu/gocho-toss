import { QueryFunctionContext } from "@tanstack/react-query";

import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";

import { CompanyResponseObjDef } from "../type";

export interface ResponseObjDef {
  data: CompanyResponseObjDef;
}

export interface GetEditCompanyRequestDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof companyDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
