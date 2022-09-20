import { jobBookmarkObjDef } from "../type/bookmark";

export const selector = (data: jobBookmarkObjDef[]) => {
  return data.map((job) => {
    return {
      id: job.id,
      title: job.title,
      endTime: job.end_time,
      company: { id: job.company.id, name: job.company.name },
    };
  });
};
