import { QueryFunctionContext } from "@tanstack/react-query";

import { jobDetailKeyObj } from "shared-constant/queryKeyFactory/job/jobDetailKeyObj";

import { JobDetailObjDef } from "../type";

export interface ResponseObjDef {
  data: JobDetailObjDef;
}

export interface GetEditJdRequestDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jobDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
