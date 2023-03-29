import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number;
}

export interface ResponseObjDef {
  data: {
    id: number;
    name: string;
    address: string;
  }[];
}

export const findFactoryKeyObj = {
  all: [{ data: "findFactory" }] as const,
  arr: (requestObj: RequestObjDef) => [{ data: "findFactory", requestObj }] as const,
};

export interface GetFindFactoryDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof findFactoryKeyObj.arr>>): Promise<ResponseObjDef>;
}
