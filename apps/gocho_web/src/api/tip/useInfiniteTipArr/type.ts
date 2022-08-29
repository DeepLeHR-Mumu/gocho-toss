import { QueryFunctionContext } from "@tanstack/react-query";

import { TipObjDef } from "@api/tip/type/tipArr";
import { tipArrKeyObj } from "@constant/queryKeyFactory/tip/arrKeyObj";

export interface ResponseObjDef {
  data: TipObjDef[];
  nextPage: number;
}

export interface GetInfiniteTipArrObjDef {
  (
    requestObj: QueryFunctionContext<ReturnType<typeof tipArrKeyObj.infinite>>
  ): Promise<ResponseObjDef>;
}
