import { JobObjDef } from "../type";

export const selector = (jobArr: JobObjDef[], count: number) => {
  const jobDataArr = jobArr.map((job) => {
    return {
      id: job.id,
      companyName: job.company.name,
      companyId: job.company.id,
      title: job.title,
      cut: job.cut,
      startTime: job.start_time,
      endTime: job.end_time,
      taskArr: job.position.task_arr,
      eduArr: job.position.edu_summary,
      placeArr: job.position.place_arr,
      rotationArr: job.position.rotation_arr,
      contractArr: job.position.contract_type,
    };
  });
  return { jobDataArr, count };
};
