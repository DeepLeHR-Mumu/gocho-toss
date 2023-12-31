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
    status: jd.status,
    companyName: jd.company.name,
    companyId: jd.company.id,
    companyLogo: jd.company.logo_url,
    title: jd.title,
    cut: jd.cut,
    view: jd.view,
    startTime: jd.start_time,
    endTime: jd.end_time,
    task: jd.task,
    edu: jd.edu_summary,
    placeArr: jd.place_arr,
    rotationArr: jd.rotation_arr,
    contract: jd.contract_type,
    requiredExp: jd.required_exp,
  }));

  return { jdDataArr, pageResult };
};
