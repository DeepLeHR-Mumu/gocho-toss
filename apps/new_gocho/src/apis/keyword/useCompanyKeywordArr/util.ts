import { ResponseObjDef } from "./type";

export const companyKeywordArrSelector = ({ data: companyKeywordArr }: ResponseObjDef) => {
  return companyKeywordArr.map((companyKeyword) => {
    return {
      keyword: companyKeyword.keyword,
      companyArr: companyKeyword.company_arr.map((company) => {
        return {
          id: company.id,
          name: company.name,
          logoUrl: company.logo_url,
          industry: company.industry,
          isBookmark: company.is_bookmark,
        };
      }),
    };
  });
};
