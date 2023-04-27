import { ResponseObjDef } from "./type";

export const factoryArrSelector = ({ data: factoryArr, page_result }: ResponseObjDef) => {
  const pageResult = {
    totalElements: page_result?.total_elements,
    totalPages: page_result?.total_pages,
    page: page_result?.page,
    size: page_result?.size,
    isFirst: page_result?.is_first,
    isLast: page_result?.is_last,
  };

  const factoryDataArr = factoryArr.map((factory) => ({
    id: factory.id,
    status: factory.status,
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
    company: {
      name: factory.company.name,
    },
  }));
  return { factoryDataArr, pageResult };
};
