export interface FactoryArrRequestObjDef {
  companyId: number;
}

export interface FactoryDetailRequestObjDef {
  factoryId: number;
}

export const factoryArrKeyObj = {
  all: [{ data: "factoryArr" }] as const,
  arr: (requestObj: FactoryArrRequestObjDef) => {
    return [{ data: "factoryArr", requestObj }] as const;
  },
};

export const factoryDetailKeyObj = {
  all: [{ data: "factoryDetail" }] as const,
  detail: (requestObj: FactoryDetailRequestObjDef) => {
    return [{ data: "factoryDetail", requestObj }] as const;
  },
  edit: (requestObj: FactoryDetailRequestObjDef) => {
    return [{ data: "factoryEdit", requestObj }] as const;
  },
};
