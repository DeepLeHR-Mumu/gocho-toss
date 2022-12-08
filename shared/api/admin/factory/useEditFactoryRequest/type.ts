import { QueryFunctionContext } from "@tanstack/react-query";
import { factoryDetailKeyObj } from "shared-constant/queryKeyFactory/factory/factoryDetailKeyObj";
import { FactoryResponseObjDef } from "../type";

export interface ResponseObjDef {
  data: FactoryResponseObjDef;
}

export interface GetEditFactoryRequestDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof factoryDetailKeyObj.edit>>): Promise<ResponseObjDef>;
}
