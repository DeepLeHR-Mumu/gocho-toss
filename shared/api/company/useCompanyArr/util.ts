import { CompanyDef } from "../type/companyArr";

export const selector = (companyArr: CompanyDef[], count: number) => {
  const companyDataArr = companyArr.map((data) => {
    return {
      id: data.id,
      name: data.name,
      logoUrl: data.logo_url,
      commentCount: data.comment_count,
    };
  });
  return { companyDataArr, count };
};
