import { jobArrKeyObj } from "@constant/queryKeyFactory/job/jobArrKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { JobObjDef } from "../type/jobArr";

export interface ResponseObjDef {
  data: JobObjDef[];
}

export interface GetJobArrDef {
  ({
    queryKey,
  }: QueryFunctionContext<
    ReturnType<typeof jobArrKeyObj.jobArr>
  >): Promise<ResponseObjDef>;
}
