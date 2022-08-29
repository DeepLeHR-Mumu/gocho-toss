import { CompanyBookmarkObjDef } from "../type/companyBookmark";

export const selector = (data: CompanyBookmarkObjDef[]) => {
  return data.map((company) => {
    return {
      id: company.id,
      name: company.name,
      info: company.info,
    };
  });
};
