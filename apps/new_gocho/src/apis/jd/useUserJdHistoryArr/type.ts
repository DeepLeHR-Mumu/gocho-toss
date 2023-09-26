import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";

import { userJdHistoryKeyObj } from "@/constants/queryKeyFactory/jd/jdUserHistoryArrKeyObj";

import { JdHistoryArrDef } from "../type/jdHistoryArr";

import { selector } from "./util";

export interface ResponseObjDef {
  data: JdHistoryArrDef[];
  page_result: PageResultDef;
}

export interface GetUserJdHistoryArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof userJdHistoryKeyObj.jdHistoryArr>>): Promise<ResponseObjDef>;
}

export type SelectorJdHistoryArr = ReturnType<typeof selector>;
