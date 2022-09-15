import { userBookmarkKeyObj } from "@sharedConstant/queryKeyFactory/bookmark/bookmarkKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { companyBookmarkObjDef } from "../type/bookmark";

interface ResponseObjDef {
  data: companyBookmarkObjDef[];
}

export interface GetUserCompanyBookmarkArrDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof userBookmarkKeyObj.companyBookmarkArr>>): Promise<ResponseObjDef>;
}
