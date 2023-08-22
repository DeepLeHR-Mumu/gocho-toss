import { QueryFunctionContext } from "@tanstack/react-query";

import { tipArrKeyObj } from "@/constants/queryKeyFactory/tip/arrKeyObj";

import { TipObjDef } from "../type/tipArr";

export interface ResponseObjDef {
  data: TipObjDef[];
  nextPage: number;
}

export interface GetInfiniteTipArrObjDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof tipArrKeyObj.infinite>>): Promise<ResponseObjDef>;
}
