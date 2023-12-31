import { QueryFunctionContext } from "@tanstack/react-query";

import { jdDetailKeyObj } from "@/constants/queryKeyFactory/jd/jdDetailKeyObj";
import { JdDetailObjDef } from "../type/jdDetail";

interface ResponseObjDef {
  data: JdDetailObjDef;
}

export interface GetJdDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jdDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
