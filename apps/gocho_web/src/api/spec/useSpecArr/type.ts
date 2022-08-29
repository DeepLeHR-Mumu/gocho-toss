import { specArrKeyObj } from "@constant/queryKeyFactory/spec/arrKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { SpecObjDef } from "../type/specArr";

interface ResponseObjDef {
  data: SpecObjDef[];
}
export interface GetSpecArrDef {
  (
    requestObj: QueryFunctionContext<ReturnType<typeof specArrKeyObj.list>>
  ): Promise<ResponseObjDef>;
}
