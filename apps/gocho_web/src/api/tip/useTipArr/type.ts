import { QueryFunctionContext } from "@tanstack/react-query";
import { TipObjDef } from "@api/tip/type/tipArr";
import { tipArrKeyObj } from "@constant/queryKeyFactory/tip/arrKeyObj";

interface ResponseObjDef {
  data: TipObjDef[];
}

export interface GetTipArrDef {
  (
    requestObj: QueryFunctionContext<ReturnType<typeof tipArrKeyObj.tipArr>>
  ): Promise<ResponseObjDef>;
}
