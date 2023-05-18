import { QueryFunctionContext } from "@tanstack/react-query";

import { jobArrKeyObj } from "shared-constant/queryKeyFactory/job/jobArrKeyObj";
import { PageResultDef } from "shared-type/api/paginationType";

import { JobObjDef } from "../type/jobArr";

export interface ResponseObjDef {
  data: JobObjDef[];
  page_result: PageResultDef;
}

export interface GetJobArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jobArrKeyObj.jobArr>>): Promise<ResponseObjDef>;
}
