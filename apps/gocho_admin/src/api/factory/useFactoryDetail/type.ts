import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  factoryId: number;
}

interface FactoryObjDef {
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
}

export interface ResponseObjDef {
  data: FactoryObjDef;
}

export const factoryDetailKeyObj = {
  all: [{ data: "factoryDetail" }] as const,
  detail: (requestObj: RequestObjDef) => {
    return [{ data: "factoryDetail", requestObj }] as const;
  },
};

export interface GetFactoryDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof factoryDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
