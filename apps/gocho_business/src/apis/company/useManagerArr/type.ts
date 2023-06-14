import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number | undefined;
}

export interface ResponseObjDef {
  data: {
    email: string;
    name: string;
    department: string;
    created_time: string;
  }[];
}

export const managerArrKeyObj = {
  all: [{ data: "managerArr" }] as const,
  detail: (requestObj: RequestObjDef) => [{ data: "managerArr", requestObj }] as const,
};

export interface GetManagerArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof managerArrKeyObj.detail>>): Promise<ResponseObjDef>;
}
