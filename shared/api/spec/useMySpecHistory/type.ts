import { QueryFunctionContext } from "@tanstack/react-query";

import { mySpecHistoryKeyObj } from "@sharedConstant/queryKeyFactory/spec/userHistoryKeyObj";
import { getMySpecHistoryDef } from "../type/mySpecHistory";

interface ResponseObjDef {
  data: getMySpecHistoryDef;
}

export interface GetMySpecHistoryArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof mySpecHistoryKeyObj.list>>): Promise<ResponseObjDef>;
}
