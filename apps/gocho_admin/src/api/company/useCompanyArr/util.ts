import { CompanyObjDef } from "./type";

export const companyArrSelector = (companyArr: CompanyObjDef[], count: number) => {
  const companyDataArr = companyArr.map((company) => {
    return {
      id: company.id,
      name: company.name,
      logoUrl: company.logo_url,
      commentCount: company.comment_count,
    };
  });
  return { companyDataArr, count };
};
