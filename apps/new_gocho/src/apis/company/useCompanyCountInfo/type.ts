import { QueryFunctionContext } from "@tanstack/react-query";

import { companyCountInfoKeyObj } from "@/constants/queryKeyFactory/company/companyCountInfoKeyObj";

export interface ResponseObjDef {
  data: {
    bookmark: number;
    view: number;
    comment_count: number;
  };
}

export interface GetCompanyCountInfoDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof companyCountInfoKeyObj.countInfo>>): Promise<ResponseObjDef>;
}
