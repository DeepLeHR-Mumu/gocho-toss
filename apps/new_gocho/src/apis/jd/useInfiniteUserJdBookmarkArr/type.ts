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
}

export interface ResponseObjDef {
  data: JdBookmarkArrDef[];
  page_result: PageResultDef;
}

export interface GetInfiniteJdArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof userBookmarkKeyObj.infinite>>): Promise<ResponseObjDef>;
}
