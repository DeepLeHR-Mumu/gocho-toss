import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  factoryId: number;
}

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
    company: {
      name: string;
    };
  };
}

export const factoryDetailKeyObj = {
  all: [{ data: "factoryDetail" }] as const,
  detail: (requestObj: RequestObjDef) => [{ data: "factoryDetail", requestObj }] as const,
};

export interface GetFactoryDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof factoryDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
