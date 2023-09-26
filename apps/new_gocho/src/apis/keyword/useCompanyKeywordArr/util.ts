import { ResponseObjDef } from "./type";

export const companyKeywordArrSelector = ({ data: companyKeywordArr }: ResponseObjDef) => companyKeywordArr.map((companyKeyword) => ({
      keyword: companyKeyword.keyword,
      companyArr: companyKeyword.company_arr.map((company) => ({
          id: company.id,
          name: company.name,
          logoUrl: company.logo_url,
          industry: company.industry,
          isBookmark: company.is_bookmark,
        })),
    }));
