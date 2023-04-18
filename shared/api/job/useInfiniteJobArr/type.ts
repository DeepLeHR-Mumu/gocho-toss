import { jobArrKeyObj } from "shared-constant/queryKeyFactory/job/jobArrKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { JobObjDef, PageResultDef } from "../type/jobArr";

export interface ResponseObjDef {
  data: JobObjDef[];
  page_result: PageResultDef;
  nextPage: number;
}

export interface GetInfiniteJobArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jobArrKeyObj.infinite>>): Promise<ResponseObjDef>;
}
