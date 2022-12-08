import { jobDetailKeyObj } from "shared-constant/queryKeyFactory/job/jobDetailKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { JobDetailObjDef } from "../type";

interface ResponseObjDef {
  data: JobDetailObjDef;
}

export interface GetJobDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jobDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
