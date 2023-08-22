import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";
import { userBookmarkKeyObj } from "@/constants/queryKeyFactory/jd/jdUserBookmarkArrKeyObj";

export interface JdBookmarkArrDef {
  id: number;
  company: {
    id: number;
    name: string;
    logo_url: string;
  };
  title: string;
  cut: boolean;
  end_time: string;
  is_expired: boolean;
}

export interface ResponseObjDef {
  data: JdBookmarkArrDef[];
  page_result: PageResultDef;
}

export interface GetUserJdBookmarkArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof userBookmarkKeyObj.jdBookmarkArr>>): Promise<ResponseObjDef>;
}
