import { QueryFunctionContext } from "@tanstack/react-query";

import { userBookmarkKeyObj } from "@/constants/queryKeyFactory/bookmark/bookmarkKeyObj";
import { PageResultDef } from "shared-type/api/paginationType";

export interface CompanyBookmarkObjDef {
  id: number;
  name: string;
  logo_url: string;
  industry: string;
}

export interface ResponseObjDef {
  data: CompanyBookmarkObjDef[];
  page_result: PageResultDef;
}

export interface GetUserCompanyBookmarkArrDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof userBookmarkKeyObj.companyBookmarkArr>>): Promise<ResponseObjDef>;
}