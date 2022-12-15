import { QueryFunctionContext } from "@tanstack/react-query";

import { recruiterArrKeyObj } from "../keyFactory";

export interface RecruiterDef {
  email: string;
  name: string;
  department: string;
}

export interface RecruiterArrResponseObjDef {
  data: RecruiterDef[];
  count: number;
}

export interface GetRecruiterArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof recruiterArrKeyObj.arr>>): Promise<RecruiterArrResponseObjDef>;
}
