import { jobArrKeyObj } from "shared-constant/queryKeyFactory/job/jobArrKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { JobObjDef } from "../type";

export interface ResponseObjDef {
  data: JobObjDef[];
  count: number;
}

export interface GetJobArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jobArrKeyObj.jobArr>>): Promise<ResponseObjDef>;
}
