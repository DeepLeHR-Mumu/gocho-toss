import { ResponseObjDef } from "./type";

export const findFactorySelector = ({ data: factoryArr }: ResponseObjDef) => {
  const factoryArrData = factoryArr.map((factory) => ({
    id: factory.id,
    name: factory.name,
    address: factory.address,
  }));

  return factoryArrData;
};
