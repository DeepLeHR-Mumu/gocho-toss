import { QueryFunctionContext } from "@tanstack/react-query";

import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { companyBookmarkObjDef } from "../../type/bookmark";

interface ResponseObjDef {
  data: companyBookmarkObjDef[];
}

export interface GetUserCompanyBookmarkArrDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof userBookmarkKeyObj.companyBookmarkArr>>): Promise<ResponseObjDef>;
}
