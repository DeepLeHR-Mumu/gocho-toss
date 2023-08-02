import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";

export interface RequestObjDef {
  companyId: number | undefined;
  size?: number;
  page?: number;
}

export interface ResponseObjDef {
  data: {
    email: string;
    name: string;
    department: string;
    created_time: string;
  }[];
  page_result: PageResultDef;
}

export const managerArrKeyObj = {
  all: [{ data: "managerArr" }] as const,
  detail: (requestObj: RequestObjDef) => [{ data: "managerArr", requestObj }] as const,
};

export interface GetManagerArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof managerArrKeyObj.detail>>): Promise<ResponseObjDef>;
}
