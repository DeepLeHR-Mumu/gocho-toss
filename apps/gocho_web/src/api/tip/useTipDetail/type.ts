import { QueryFunctionContext } from "@tanstack/react-query";

import { TipObjDef } from "@api/tip/type/tipArr";
import { tipDetailKeyObj } from "@constant/queryKeyFactory/tip/detailKeyObj";

interface ResponseObjDef {
  data: TipObjDef;
}

export interface GetTipDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof tipDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
