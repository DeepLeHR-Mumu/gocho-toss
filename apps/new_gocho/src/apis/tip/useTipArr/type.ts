import { QueryFunctionContext } from "@tanstack/react-query";
import { tipArrKeyObj } from "@/constants/queryKeyFactory/tip/arrKeyObj";
import { TipObjDef } from "../type/tipArr";

interface ResponseObjDef {
  data: TipObjDef[];
}

export interface GetTipArrDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof tipArrKeyObj.tipArr>>): Promise<ResponseObjDef>;
}
