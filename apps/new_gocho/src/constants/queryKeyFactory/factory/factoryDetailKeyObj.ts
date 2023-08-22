export interface FactoryDetailRequestObjDef {
  factoryId: number;
}

export const factoryDetailKeyObj = {
  all: [{ data: "factoryDetail" }] as const,
  detail: (requestObj: FactoryDetailRequestObjDef) => {
    return [{ data: "factoryDetail", requestObj }] as const;
  },
  edit: (requestObj: FactoryDetailRequestObjDef) => {
    return [{ data: "factoryEdit", requestObj }] as const;
  },
};
