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

export const factoryEditKeyObj = {
  all: [{ data: "factoryEdit" }] as const,
  edit: (requestObj: RequestObjDef) => {
    return [{ data: "factoryEdit", requestObj }] as const;
  },
};

export interface GetEditFactoryRequestDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof factoryEditKeyObj.edit>>): Promise<ResponseObjDef>;
}
