import { ResponseObjDef } from "./type";

export const companyKeywordArrSelector = ({ data: keywordArr }: ResponseObjDef) =>
  keywordArr.map((keywordObj) => ({
    keyword: keywordObj.keyword,
    companyArr: keywordObj.company_arr.map((company) => ({
      id: company.id,
      name: company.name,
      logoUrl: company.logo_url,
    })),
  }));
