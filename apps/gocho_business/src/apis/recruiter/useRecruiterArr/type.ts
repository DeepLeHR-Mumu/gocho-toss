import { QueryFunctionContext } from "@tanstack/react-query";

export interface ResponseObjDef {
  data: {
    email: string;
    name: string;
    department: string;
    created_time: number;
  }[];
}

export const recruiterArrKeyObj = {
  all: [{ data: "recruiterArr" }] as const,
};

export interface GetRecruiterArrDef {
  ({ queryKey }: QueryFunctionContext): Promise<ResponseObjDef>;
}
