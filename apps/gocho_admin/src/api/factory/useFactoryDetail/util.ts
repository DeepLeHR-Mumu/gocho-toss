import { FactoryResponseObjDef } from "../type";

export const selector = (factory: FactoryResponseObjDef) => {
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
};
