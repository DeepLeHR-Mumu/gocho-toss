import { companyBookmarkObjDef } from "../../type/bookmark";

export const selector = (data: companyBookmarkObjDef[]) => {
  if (data === null) {
    return null;
  }
  return data.map((company) => {
    return {
      id: company.id,
      name: company.name,
      logoUrl: company.logo_url,
    };
  });
};
