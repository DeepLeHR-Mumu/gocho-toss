import { QueryFunctionContext } from "@tanstack/react-query";

import { factoryDetailKeyObj } from "../keyFactory";
import { FactoryResponseObjDef } from "../type";

export interface ResponseObjDef {
  data: FactoryResponseObjDef;
}

export interface GetFactoryDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof factoryDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
