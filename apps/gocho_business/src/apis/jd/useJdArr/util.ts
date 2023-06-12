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
    applyUrl: jd.apply_url,
    status: {
      name: jd.status.name,
      reason: jd.status.reason,
    },
    uploader: { name: jd.uploader.name, department: jd.uploader.department, is_mine: jd.uploader.is_mine },
    title: jd.title,
    cut: jd.cut,
    view: jd.view,
    bookmark: jd.bookmark,
    click: jd.click,
    startTime: jd.start_time,
    endTime: jd.end_time,
    createdTime: jd.created_time,
    updatedTime: jd.updated_time,
    task: jd.task,
  }));
  return { jdDataArr, pageResult };
};
