import { PageResultDef } from "shared-type/api/paginationType";

import { CompanyHistoriesArr } from "./type";

export const selector = (data: CompanyHistoriesArr[], page_result: PageResultDef) => {
  const pageResult = {
    totalElements: page_result.total_elements,
    totalPages: page_result.total_pages,
    page: page_result.page,
    size: page_result.size,
    isFirst: page_result.is_first,
    isLast: page_result.is_last,
  };

  const companyHistoryDataArr = data.map((company) => ({
      id: company.id,
      name: company.name,
      size: company.size,
      logoUrl: company.logo_url,
      industry: company.industry,
      isBookmark: company.is_bookmark,
    }));

  return { companyHistoryDataArr, pageResult };
};
