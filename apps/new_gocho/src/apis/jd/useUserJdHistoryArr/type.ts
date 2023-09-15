import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";

import { userJdHistoryKeyObj } from "@/constants/queryKeyFactory/jd/jdUserHistoryArrKeyObj";

export interface JdHistoryArrDef {
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
  data: JdHistoryArrDef[];
  page_result: PageResultDef;
}

export interface GetUserJdHistoryArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof userJdHistoryKeyObj.jdHistoryArr>>): Promise<ResponseObjDef>;
}
