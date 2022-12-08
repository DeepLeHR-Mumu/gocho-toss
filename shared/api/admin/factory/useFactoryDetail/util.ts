import { FactoryObjDef } from "../type";

export const selector = (factory: FactoryObjDef) => {
  return {
    id: factory.id,
    address: factory.address,
    name: factory.name,
  };
};
