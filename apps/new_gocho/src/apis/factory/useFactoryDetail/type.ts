import { FactoryDetailObj } from "../type";

interface ResponseObjDef {
  data: FactoryDetailObj;
}

export interface GetFactoryDetailDef {
  (factoryId: number): Promise<ResponseObjDef>;
}
