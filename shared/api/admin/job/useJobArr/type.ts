import { QueryFunctionContext } from "@tanstack/react-query";

import { jobArrKeyObj } from "../keyFactory";
import { JobObjDef } from "../type";

export interface ResponseObjDef {
  data: JobObjDef[];
  count: number;
}

export interface GetJobArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jobArrKeyObj.jobArr>>): Promise<ResponseObjDef>;
}
