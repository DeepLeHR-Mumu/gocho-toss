import { FactoryObjDef } from "../type";

export const selector = (factoryArr: FactoryObjDef[]) => {
  const factoryDataArr = factoryArr.map((factory) => {
    return {
      id: factory.id,
      address: factory.address,
      name: factory.name,
      maleNumber: factory.male_number,
      femaleNumber: factory.female_number,
      product: factory.product,
      bus: {
        exists: factory.bus.exists,
        desc: factory.bus.desc,
      },
      dormitory: {
        exists: factory.dormitory.exists,
        desc: factory.dormitory.desc,
      },
    };
  });
  return { factoryDataArr };
};
