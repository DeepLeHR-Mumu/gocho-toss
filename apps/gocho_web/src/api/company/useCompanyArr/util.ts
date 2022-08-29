import { CompanyDef } from "../type/companyArr";

export const selector = (companyArr: CompanyDef[]) => {
  return companyArr.map((company) => {
    return company.id;
  });
};
