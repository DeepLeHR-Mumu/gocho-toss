import { PageResultDef } from "shared-type/api/paginationType";

import { CompanyBookmarkObjDef } from "./type";

export const selector = (data: CompanyBookmarkObjDef[], page_result: PageResultDef) => {
  const pageResult = {
    totalElements: page_result.total_elements,
    totalPages: page_result.total_pages,
    page: page_result.page,
    size: page_result.size,
    isFirst: page_result.is_first,
    isLast: page_result.is_last,
  };

  const companyBookmarkDataArr = data.map((company) => {
    return {
      id: company.id,
      name: company.name,
      logoUrl: company.logo_url,
      industry: company.industry,
      size: company.size,
    };
  });

  return { companyBookmarkDataArr, pageResult };
};
