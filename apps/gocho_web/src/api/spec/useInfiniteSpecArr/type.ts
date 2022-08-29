import { QueryFunctionContext } from "@tanstack/react-query";

import { specArrKeyObj } from "@constant/queryKeyFactory/spec/arrKeyObj";

import { SpecObjDef } from "../type/specArr";

interface ResponseDef {
  data: SpecObjDef[];
  nextPage: number;
}

export interface GetInifiniteSpecArrDef {
  ({
    queryKey,
  }: QueryFunctionContext<
    ReturnType<typeof specArrKeyObj.infinite>
  >): Promise<ResponseDef>;
}
