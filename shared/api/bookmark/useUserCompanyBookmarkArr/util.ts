import { companyBookmarkObjDef } from "../type/bookmark";

export const selector = (data: companyBookmarkObjDef[]) => {
  return data.map((company) => {
    return {
      id: company.id,
      name: company.name,
      logoUrl: company.logo_url,
    };
  });
};
