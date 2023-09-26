import { QueryFunctionContext } from "@tanstack/react-query";

import { userBookmarkKeyObj } from "@/constants/queryKeyFactory/company/companyUserBookmarkArrKeyObj";
import { PageResultDef } from "shared-type/api/paginationType";

export interface CompanyBookmarkArrDef {
  id: number;
  name: string;
  logo_url: string;
}

export interface ResponseObjDef {
  data: CompanyBookmarkArrDef[];
  page_result: PageResultDef;
}

export interface GetInfiniteJdArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof userBookmarkKeyObj.infinite>>): Promise<ResponseObjDef>;
}
