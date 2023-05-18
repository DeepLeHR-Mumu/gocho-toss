import { QueryFunctionContext } from "@tanstack/react-query";

import { oldBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";
import { PageResultDef } from "shared-type/api/paginationType";

export interface CompanyBookmarkObjDef {
  id: number;
  name: string;
  logo_url: string;
}

export interface ResponseObjDef {
  data: CompanyBookmarkObjDef[];
  page_result: PageResultDef;
}

export interface GetUserCompanyBookmarkArrDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof oldBookmarkKeyObj.companyBookmarkArr>>): Promise<ResponseObjDef>;
}
