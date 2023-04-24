import { JobObjDef, PageResultDef } from "../type/jobArr";

export const selector = (jobArr: JobObjDef[], page_result: PageResultDef) => {
  const pageResult = {
    totalElements: page_result.total_elements,
    totalPages: page_result.total_pages,
    page: page_result.page,
    size: page_result.size,
    isFirst: page_result.is_first,
    isLast: page_result.is_last,
  };

  const jobDataArr = jobArr.map((job) => {
    return {
      id: job.id,
      company: {
        id: job.company.id,
        name: job.company.name,
        logoUrl: job.company.logo_url,
      },
      title: job.title,
      cut: job.cut,
      startTime: job.start_time,
      endTime: job.end_time,
      createdTime: job.created_time,
      updatedTime: job.updated_time,
      applyUrl: job.apply_url,
      bookmark: job.bookmark,
      isBookmark: job.is_bookmark,
      view: job.view,
      click: job.click,
      positionCount: job.position_count,
      high: job.high,
      college: job.college,
      requiredExpArr: job.required_exp_arr,
      placeArr: job.place_arr,
      rotationArr: job.rotation_arr,
      contractType: job.contract_type,
      taskArr: job.task_arr,
    };
  });
  return { jobDataArr, pageResult };
};
