import { CompanyObjDef } from "./type";

export const companyArrSelector = (companyArr: CompanyObjDef[], count: number) => {
  const companyDataArr = companyArr.map((company) => {
    return {
      id: company.id,
      name: company.name,
    };
  });
  return { companyDataArr, count };
};
