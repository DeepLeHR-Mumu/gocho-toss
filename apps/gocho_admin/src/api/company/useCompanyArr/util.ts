import { ResponseObjDef } from "./type";

export const companyArrSelector = ({ data: companyArr, page_result }: ResponseObjDef) => {
  const pageResult = {
    totalElements: page_result?.total_elements,
    totalPages: page_result?.total_pages,
    page: page_result?.page,
    size: page_result?.size,
    isFirst: page_result?.is_first,
    isLast: page_result?.is_last,
  };

  const companyDataArr = companyArr.map((company) => ({
    id: company.id,
    status: company.status,
    name: company.name,
    logoUrl: company.logo_url,
    commentCount: company.comment_count,
  }));
  return { companyDataArr, pageResult };
};
