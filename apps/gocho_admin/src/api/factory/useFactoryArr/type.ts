import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId?: number;
  limit?: number;
  offset?: number;
  status?: "all" | "upload-waiting" | "modify-waiting" | "upload-reject" | "modify-reject";
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
  count: number;
}

export const factoryArrKeyObj = {
  all: [{ data: "factoryArr" }] as const,
  arr: (requestObj: RequestObjDef) => {
    return [{ data: "factoryArr", requestObj }] as const;
  },
};

export interface GetFactoryArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof factoryArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
