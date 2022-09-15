import { QueryFunctionContext } from "@tanstack/react-query";

import { specDetailKeyObj } from "@sharedConstant/queryKeyFactory/spec/detailKeyObj";

import { SpecDetailObjDef } from "../type/specDetail";

interface ResponseObjDef {
  data: SpecDetailObjDef;
}
export interface GetSpecDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof specDetailKeyObj.spec>>): Promise<ResponseObjDef>;
}
