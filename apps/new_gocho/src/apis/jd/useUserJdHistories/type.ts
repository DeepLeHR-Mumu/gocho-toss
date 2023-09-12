import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";

import { userJdHistoriesKeyObj } from "@/constants/queryKeyFactory/jd/jdUserHistoriesArrKeyObj";

export interface JdHistoriesArrDef {
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
  data: JdHistoriesArrDef[];
  page_result: PageResultDef;
}

export interface GetUserJdHistoriesArrDef {
  ({
    queryKey,
  }: QueryFunctionContext<ReturnType<typeof userJdHistoriesKeyObj.jdHistoriesArr>>): Promise<ResponseObjDef>;
}
