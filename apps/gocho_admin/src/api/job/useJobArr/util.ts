import { JobObjDef } from "../type";

export const selector = (jobArr: JobObjDef[], count: number) => {
  const jobDataArr = jobArr.map((job) => {
    return {
      id: job.id,
      applyUrl: job.apply_url,
      companyName: job.company.name,
      companyId: job.company.id,
      companyLogo: job.company.logo_url,
      title: job.title,
      cut: job.cut,
      view: job.view,
      startTime: job.start_time,
      endTime: job.end_time,
      taskArr: job.task_arr,
      eduArr: job.edu_summary,
      placeArr: job.place_arr,
      rotationArr: job.rotation_arr,
      contractArr: job.contract_type,
      requiredExpArr: job.required_exp_arr,
    };
  });
  return { jobDataArr, count };
};
