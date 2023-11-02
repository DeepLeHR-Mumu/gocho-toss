import { FactoryDetailObj } from "../type";

export const selector = (data: FactoryDetailObj) => {
  const { id, name, address, male_number, female_number, product, bus, dormitory } = data;

  return {
    id,
    name,
    address,
    maleNumber: male_number,
    femaleNumber: female_number,
    product,
    bus,
    dormitory,
  };
};
