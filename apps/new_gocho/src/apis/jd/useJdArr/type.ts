import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";
import { jdArrKeyObj } from "@/constants/queryKeyFactory/jd/jdArrKeyObj";

import { JdObjDef } from "../type/jdArr";

export interface ResponseObjDef {
  data: JdObjDef[];
  page_result: PageResultDef;
}

export interface GetJdArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jdArrKeyObj.jdArr>>): Promise<ResponseObjDef>;
}
