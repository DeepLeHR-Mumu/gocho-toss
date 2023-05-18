import { PageResultDef } from "shared-type/api/paginationType";

import { JobBookmarkArrDef } from "./type";

export const selector = (data: JobBookmarkArrDef[], page_result: PageResultDef) => {
  const pageResult = {
    totalElements: page_result.total_elements,
    totalPages: page_result.total_pages,
    page: page_result.page,
    size: page_result.size,
    isFirst: page_result.is_first,
    isLast: page_result.is_last,
  };
  const userJobBookmarkArr = data.map((job) => {
    return {
      id: job.id,
      company: {
        id: job.company.id,
        name: job.company.name,
        logoUrl: job.company.logo_url,
      },
      title: job.title,
      cut: job.cut,
      endTime: job.end_time,
    };
  });

  return { userJobBookmarkArr, pageResult };
};
