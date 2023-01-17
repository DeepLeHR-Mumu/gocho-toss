import { ResponseObjDef } from "./type";

export const companyArrSelector = ({ data: companyArr, count }: ResponseObjDef) => {
  const companyDataArr = companyArr.map((company) => {
    return {
      id: company.id,
      status: company.status,
      name: company.name,
      logoUrl: company.logo_url,
      commentCount: company.comment_count,
    };
  });
  return { companyDataArr, count };
};
