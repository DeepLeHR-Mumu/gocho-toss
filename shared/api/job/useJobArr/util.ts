import { JobObjDef } from "../type/jobArr";

export const selector = (jobArr: JobObjDef[], count: number) => {
  const jobDataArr = jobArr.map((job) => {
    return {
      id: job.id,
      companyName: job.company.name,
      companyLogo: job.company.logo_url,
      companyId: job.company_id,
      startTime: job.start_time,
      endTime: job.end_time,
      title: job.title,
      high: job.high,
      college: job.college,
      placeArr: job.place_arr,
      rotationArr: job.rotation_arr,
      taskArr: job.task_arr,
      bookmark: job.bookmark,
      view: job.view,
      cut: job.cut,
    };
  });
  return { jobDataArr, count };
};
