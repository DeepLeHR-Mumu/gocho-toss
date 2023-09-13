import { QueryFunctionContext } from "@tanstack/react-query";

import { jdCountKeyObj } from "@/constants/queryKeyFactory/jd/jdCountKeyObj";

export interface ResponseObjDef {
  data: number;
}

export interface GetJdCountDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jdCountKeyObj.jdCount>>): Promise<ResponseObjDef>;
}
