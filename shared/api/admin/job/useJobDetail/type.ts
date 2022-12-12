import { QueryFunctionContext } from "@tanstack/react-query";

import { jobDetailKeyObj } from "../keyFactory";
import { JobDetailObjDef } from "../type";

interface ResponseObjDef {
  data: JobDetailObjDef;
}

export interface GetJobDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jobDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
