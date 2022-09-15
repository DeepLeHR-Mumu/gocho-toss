import { QueryFunctionContext } from "@tanstack/react-query";

import { userCompanyBookmarkArrKeyObj } from "@sharedConstant/queryKeyFactory/bookmark/companyArrKeyObj";

import { CompanyBookmarkObjDef } from "../type/companyBookmark";

interface ResponseObjDef {
  data: CompanyBookmarkObjDef[];
}

export interface GetUserCompanyBookmarkArrDef {
  (
    requestObj: QueryFunctionContext<ReturnType<typeof userCompanyBookmarkArrKeyObj.bookmarkArr>>
  ): Promise<ResponseObjDef>;
}
