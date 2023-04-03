import { QueryFunctionContext } from "@tanstack/react-query";

export interface ResponseObjDef {
  data: {
    email: string;
    name: string;
    department: string;
  }[];
  count: number;
}

export const recruiterArrKeyObj = {
  all: [{ data: "recruiterArr" }] as const,
  arr: () => [{ data: "recruiterArr" }] as const,
};

export interface GetRecruiterArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof recruiterArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
