import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";

export interface RequestObjDef {
  size?: number;
  page?: number;
  status?: "all" | "upload-waiting" | "modify-waiting" | "upload-reject" | "modify-reject";
  companyId?: number;
}

export interface ResponseObjDef {
  data: {
    id: number;
    status: {
      name: string;
      reason: string | null;
    };
    name: string;
    address: string;
    male_number: number;
    female_number: number;
    product: string;
    bus: {
      exists: boolean;
      desc: string | null;
    };
    dormitory: {
      exists: boolean;
      desc: string | null;
    };
    company: {
      name: string;
    };
  }[];
  page_result: PageResultDef;
}

export const factoryArrKeyObj = {
  all: [{ data: "factoryArr" }] as const,
  arr: (requestObj: RequestObjDef) => [{ data: "factoryArr", requestObj }] as const,
};

export interface GetFactoryArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof factoryArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
