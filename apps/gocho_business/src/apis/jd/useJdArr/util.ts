import { ResponseObjDef } from "./type";

export const jdArrSelector = ({ data: jdArr, count }: ResponseObjDef) => {
  const jdDataArr = jdArr.map((jd) => ({
    id: jd.id,
    applyUrl: jd.apply_url,
    status: {
      name: jd.status.name,
      reason: jd.status.reason,
    },
    uploader: { name: jd.uploader.name, department: jd.uploader.department, is_mine: jd.uploader.is_mine },
    companyName: jd.company.name,
    companyId: jd.company.id,
    companyLogo: jd.company.logo_url,
    title: jd.title,
    cut: jd.cut,
    view: jd.view,
    bookmark: jd.bookmark,
    click: jd.click,
    startTime: jd.start_time,
    endTime: jd.end_time,
    updatedTime: jd.updated_time,
    taskArr: jd.task_arr,
  }));
  return { jdDataArr, count };
};
