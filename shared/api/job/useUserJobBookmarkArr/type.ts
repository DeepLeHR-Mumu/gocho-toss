import { QueryFunctionContext } from "@tanstack/react-query";

import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/job/jobUserBookmarkArrKeyObj";

export interface PageResultDef {
  total_elements: number;
  total_pages: number;
  page: number;
  size: number;
  is_first: boolean;
  is_last: boolean;
}

export interface JobBookmarkArrDef {
  id: number;
  company: {
    id: number;
    name: string;
    logo_url: string;
  };
  title: string;
  cut: boolean;
  end_time: string;
}

export interface ResponseObjDef {
  data: JobBookmarkArrDef[];
  page_result: PageResultDef;
}

export interface GetUserJobBookmarkArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof userBookmarkKeyObj.jobBookmarkArr>>): Promise<ResponseObjDef>;
}
