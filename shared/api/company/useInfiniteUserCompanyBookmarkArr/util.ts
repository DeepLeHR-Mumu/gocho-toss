import { CompanyBookmarkArrDef, PageResultDef } from "./type";

export const selector = (data: CompanyBookmarkArrDef[], page_result: PageResultDef) => {
  const pageResult = {
    totalElements: page_result.total_elements,
    totalPages: page_result.total_pages,
    page: page_result.page,
    size: page_result.size,
    isFirst: page_result.is_first,
    isLast: page_result.is_last,
  };
  const userCompanyBookmarkArr = data.map((company) => {
    return {
      id: company.id,
      name: company.name,
      logoUrl: company.logo_url,
    };
  });

  return { userCompanyBookmarkArr, pageResult };
};
