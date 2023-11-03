import { ResponseObjDef } from "./type";

export const jdArrSelector = ({ data: jdArr, page_result }: ResponseObjDef) => {
  const pageResult = {
    totalElements: page_result?.total_elements,
    totalPages: page_result?.total_pages,
    page: page_result?.page,
    size: page_result?.size,
    isFirst: page_result?.is_first,
    isLast: page_result?.is_last,
  };

  const jdDataArr = jdArr.map((jd) => ({
    id: jd.id,
    status: {
      name: jd.status.name,
      reason: jd.status.reason,
    },
    uploader: { name: jd.uploader.name, isMine: jd.uploader.is_mine },
    title: jd.title,
    cut: jd.cut,
    bookmark: jd.bookmark,
    startTime: jd.start_time,
    endTime: jd.end_time,
    createdTime: jd.created_time,
    updatedTime: jd.updated_time,
    totalApplicant: jd.total_applicant,
    unreadApplicant: jd.unread_applicant,
    view: jd.view,
  }));
  return { jdDataArr, pageResult };
};
