import { QueryFunctionContext } from "@tanstack/react-query";

import { tipDetailKeyObj } from "shared-constant/queryKeyFactory/tip/detailKeyObj";
import { TipObjDef } from "../type/tipArr";

interface ResponseObjDef {
  data: TipObjDef;
}

export interface GetTipDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof tipDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
