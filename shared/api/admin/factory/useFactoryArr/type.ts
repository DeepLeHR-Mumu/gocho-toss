import { QueryFunctionContext } from "@tanstack/react-query";
import { factoryArrKeyObj } from "shared-constant/queryKeyFactory/factory/factoryArrKeyObj";
import { FactoryObjDef } from "../type";

export interface ResponseObjDef {
  data: FactoryObjDef[];
}

export interface GetFactoryArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof factoryArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
