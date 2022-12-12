import { QueryFunctionContext } from "@tanstack/react-query";

import { companyArrKeyObj } from "../keyFactory";
import { CompanyDef } from "../type";

export interface JobArrResponseObjDef {
  data: CompanyDef[];
  count: number;
}

export interface GetCompanyArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof companyArrKeyObj.companyArr>>): Promise<JobArrResponseObjDef>;
}
