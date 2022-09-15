import { QueryFunctionContext } from "@tanstack/react-query";

import { companyCommentArrKeyObj } from "@sharedConstant/queryKeyFactory/company/commentArrKeyObj";

import { CompanyCommentArrDef } from "../type/companyCommentArr";

interface ResponseObjDef {
  data: CompanyCommentArrDef;
}

export interface GetCompanyCommentDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof companyCommentArrKeyObj.commentArr>>): Promise<ResponseObjDef>;
}
