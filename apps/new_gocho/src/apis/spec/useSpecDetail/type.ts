import { QueryFunctionContext } from "@tanstack/react-query";

import { specDetailKeyObj } from "@/constants/queryKeyFactory/spec/detailKeyObj";

import { SpecDetailObjDef } from "../type/specDetail";

interface ResponseObjDef {
  data: SpecDetailObjDef;
}
export interface GetSpecDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof specDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}