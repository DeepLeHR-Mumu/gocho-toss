import { QueryFunctionContext } from "@tanstack/react-query";
import { recruiterArrKeyObj } from "shared-constant/queryKeyFactory/recruiter/arrKeyObj";

import { RecruiterDef } from "../type";

export interface RecruiterArrResponseObjDef {
  data: RecruiterDef[];
  count: number;
}

export interface GetRecruiterArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof recruiterArrKeyObj.arr>>): Promise<RecruiterArrResponseObjDef>;
}
