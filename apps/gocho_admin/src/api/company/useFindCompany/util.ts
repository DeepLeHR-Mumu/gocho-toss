import { CompanyDef } from "../type";

export const selector = (companyArr: CompanyDef[], count: number) => {
  const companyDataArr = companyArr.map((data) => {
    return {
      id: data.id,
      name: data.name,
    };
  });
  return { companyDataArr, count };
};
