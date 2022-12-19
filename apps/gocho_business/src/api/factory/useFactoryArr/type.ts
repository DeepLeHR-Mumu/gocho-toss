import { QueryFunctionContext } from "@tanstack/react-query";

export interface ResponseObjDef {
  data: {
    id: number;
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
  }[];
}

export const factoryArrKeyObj = {
  arr: [{ data: "factoryArr" }] as const,
};

export interface GetFactoryArrDef {
  ({ queryKey }: QueryFunctionContext): Promise<ResponseObjDef>;
}
