import { QueryFunctionContext } from "@tanstack/react-query";

import { jobDetailKeyObj } from "@sharedConstant/queryKeyFactory/job/jobDetailKeyObj";
import { JobDetailObjDef } from "../type/jobDetail";

interface ResponseObjDef {
  data: JobDetailObjDef;
}

export interface GetJobDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jobDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
