import { QueryFunctionContext } from "@tanstack/react-query";

import { factoryDetailKeyObj } from "../keyFactory";
import { FactoryResponseObjDef } from "../type";

export interface ResponseObjDef {
  data: FactoryResponseObjDef;
}

export interface GetEditFactoryRequestDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof factoryDetailKeyObj.edit>>): Promise<ResponseObjDef>;
}
