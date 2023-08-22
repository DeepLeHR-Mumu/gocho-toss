export interface FactoryArrRequestObjDef {
  companyId: number;
}

export const factoryArrKeyObj = {
  all: [{ data: "factoryArr" }] as const,
  arr: (requestObj: FactoryArrRequestObjDef) => {
    return [{ data: "factoryArr", requestObj }] as const;
  },
};
