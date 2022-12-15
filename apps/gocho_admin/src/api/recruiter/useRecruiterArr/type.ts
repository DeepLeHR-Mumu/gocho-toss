import { QueryFunctionContext } from "@tanstack/react-query";

interface RecruiterDef {
  email: string;
  name: string;
  department: string;
}

export interface ResponseObjDef {
  data: RecruiterDef[];
  count: number;
}

export const recruiterArrKeyObj = {
  all: [{ data: "recruiterArr" }] as const,
  arr: () => {
    return [{ data: "recruiterArr" }] as const;
  },
};

export interface GetRecruiterArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof recruiterArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
