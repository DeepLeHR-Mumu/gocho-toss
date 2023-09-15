import { PageResultDef } from "shared-type/api/paginationType";

import { JdHistoryArrDef } from "./type";

export const selector = (data: JdHistoryArrDef[], page_result: PageResultDef) => {
  const pageResult = {
    totalElements: page_result.total_elements,
    totalPages: page_result.total_pages,
    page: page_result.page,
    size: page_result.size,
    isFirst: page_result.is_first,
    isLast: page_result.is_last,
  };
  const userJdHistoryArr = data.map((jd) => ({
    id: jd.id,
    company: {
      id: jd.company.id,
      name: jd.company.name,
      logoUrl: jd.company.logo_url,
    },
    title: jd.title,
    cut: jd.cut,
    endTime: jd.end_time,
    isExpired: jd.is_expired,
  }));

  return { userJdHistoryArr, pageResult };
};
