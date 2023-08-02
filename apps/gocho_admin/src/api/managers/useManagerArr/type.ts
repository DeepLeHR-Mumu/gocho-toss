import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";

export interface RequestObjDef {
  size?: number;
  page?: number;
  status?: "all" | "auth" | "waiting" | "unauth";
  companyId?: number;
}

export interface ResponseObjDef {
  data: {
    id: number;
    status: {
      name: string;
      reason: string[];
    };
    is_first: boolean;
    name: string;
    gender: string;
    is_foreigner: boolean;
    birth_date: string;
    phone_numer: string;
    telecom: string;
    department: string;
    position: string;
    company: {
      id: number;
      name: string;
      logo_url: string | null;
    };
  }[];
  page_result: PageResultDef;
}

export const managerArrKeyObj = {
  all: [{ data: "managerArr" }] as const,
  arr: (requestObj: RequestObjDef) => [{ data: "managerArr", requestObj }] as const,
};

export interface GetManagerArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof managerArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
