import { searchJobArrKeyObj } from "shared-constant/queryKeyFactory/job/searchJobArrKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { JobObjDef } from "../type/jobArr";

export interface ResponseObjDef {
  data: JobObjDef[];
  count: number;
}

export interface GetJobArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof searchJobArrKeyObj.searchArr>>): Promise<ResponseObjDef>;
}
