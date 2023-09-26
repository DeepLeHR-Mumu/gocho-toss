export interface FactoryDetailRequestObjDef {
  factoryId: number;
}

export const factoryDetailKeyObj = {
  all: [{ data: "factoryDetail" }] as const,
  detail: (requestObj: FactoryDetailRequestObjDef) => [{ data: "factoryDetail", requestObj }] as const,
  edit: (requestObj: FactoryDetailRequestObjDef) => [{ data: "factoryEdit", requestObj }] as const,
};
