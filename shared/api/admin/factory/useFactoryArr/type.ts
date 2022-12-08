import { QueryFunctionContext } from "@tanstack/react-query";
import { factoryArrKeyObj } from "shared-constant/queryKeyFactory/factory/factoryArrKeyObj";
import { FactoryResponseObjDef } from "../type";

export interface ResponseObjDef {
  data: FactoryResponseObjDef[];
}

export interface GetFactoryArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof factoryArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
