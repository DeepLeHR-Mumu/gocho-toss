import { jobArrKeyObj } from "@constant/queryKeyFactory/job/jobArrKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { JobObjDef } from "../type/jobArr";

export interface ResponseObjDef {
  data: JobObjDef[];
  count: number;
  nextPage: number;
}

export interface GetInfiniteJobArrDef {
  ({
    queryKey,
  }: QueryFunctionContext<
    ReturnType<typeof jobArrKeyObj.infinite>
  >): Promise<ResponseObjDef>;
}
