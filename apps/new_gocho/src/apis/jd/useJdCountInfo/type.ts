import { QueryFunctionContext } from "@tanstack/react-query";

import { jdCountInfoKeyObj } from "@/constants/queryKeyFactory/jd/jdCountInfoKeyObj";

export interface ResponseObjDef {
  data: {
    bookmark: number;
    view: number;
    comment_count: number;
  };
}

export interface GetJdCountInfoDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jdCountInfoKeyObj.countInfo>>): Promise<ResponseObjDef>;
}
