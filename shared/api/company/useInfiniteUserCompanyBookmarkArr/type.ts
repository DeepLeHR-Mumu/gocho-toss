import { QueryFunctionContext } from "@tanstack/react-query";

import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/company/companyUserBookmarkArrKeyObj";

export interface PageResultDef {
  total_elements: number;
  total_pages: number;
  page: number;
  size: number;
  is_first: boolean;
  is_last: boolean;
}

export interface CompanyBookmarkArrDef {
  id: number;
  name: string;
  logo_url: string;
}

export interface ResponseObjDef {
  data: CompanyBookmarkArrDef[];
  page_result: PageResultDef;
}

export interface GetInfiniteJobArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof userBookmarkKeyObj.infinite>>): Promise<ResponseObjDef>;
}
