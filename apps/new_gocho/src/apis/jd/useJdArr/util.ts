import { PageResultDef } from "shared-type/api/paginationType";

import { JdObjDef } from "../type/jdArr";

export const selector = (jdArr: JdObjDef[], page_result: PageResultDef) => {
  const pageResult = {
    totalElements: page_result.total_elements,
    totalPages: page_result.total_pages,
    page: page_result.page,
    size: page_result.size,
    isFirst: page_result.is_first,
    isLast: page_result.is_last,
  };

  const jdDataArr = jdArr.map((jd) => ({
    id: jd.id,
    company: {
      id: jd.company.id,
      name: jd.company.name,
      logoUrl: jd.company.logo_url,
      isBookmark: jd.company.is_bookmark,
    },
    title: jd.title,
    cut: jd.cut,
    startTime: jd.start_time,
    endTime: jd.end_time,
    createdTime: jd.created_time,
    updatedTime: jd.updated_time,
    applyUrl: jd.apply_url,
    bookmark: jd.bookmark,
    isBookmark: jd.is_bookmark,
    view: jd.view,
    click: jd.click,
    positionCount: jd.position_count,
    high: jd.high,
    college: jd.college,
    requiredExpArr: jd.required_exp_arr,
    placeArr: jd.place_arr,
    rotationArr: jd.rotation_arr,
    contractType: jd.contract_type,
    task: jd.task,
    isExpired: jd.is_expired,
  }));
  return { jdDataArr, pageResult };
};
