import { ResponseObjDef } from "./type";

export const noticeArrSelector = ({ data: noticeArr, page_result }: ResponseObjDef) => {
  const pageResult = {
    totalElements: page_result?.total_elements,
    totalPages: page_result?.total_pages,
    page: page_result?.page,
    size: page_result?.size,
    isFirst: page_result?.is_first,
    isLast: page_result?.is_last,
  };

  const noticeDataArr = noticeArr.map((notice) => ({
    id: notice.id,
    type: notice.type,
    title: notice.title,
    description: notice.description,
    view: notice.view,
    createdTime: notice.created_time,
  }));

  return { noticeDataArr, pageResult };
};
