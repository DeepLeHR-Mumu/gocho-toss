import { QueryFunctionContext } from "@tanstack/react-query";

import { specArrKeyObj } from "@/constants/queryKeyFactory/spec/arrKeyObj";
import { SpecObjDef } from "../type/specArr";

interface ResponseObjDef {
  data: SpecObjDef[];
}
export interface GetSpecArrDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof specArrKeyObj.list>>): Promise<ResponseObjDef>;
}
