import { ResponseObjDef } from "./type";

export const companyArrSelector = ({ data: companyArr, count }: ResponseObjDef) => {
  const companyDataArr = companyArr.map((company) => ({
    id: company.id,
    name: company.name,
    businessNumber: company.business_number,
  }));
  return { companyDataArr, count };
};
