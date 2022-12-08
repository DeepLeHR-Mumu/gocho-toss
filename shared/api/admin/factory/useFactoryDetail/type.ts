import { QueryFunctionContext } from "@tanstack/react-query";
import { factoryDetailKeyObj } from "shared-constant/queryKeyFactory/factory/factoryDetailKeyObj";
import { FactoryObjDef } from "../type";

export interface ResponseObjDef {
  data: FactoryObjDef;
}

export interface GetFactoryDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof factoryDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
