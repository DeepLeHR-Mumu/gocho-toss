import { JobBookmarkObjDef } from "../type/jobBookmark";

export const selector = (data: JobBookmarkObjDef[]) => {
  return data.map((job) => {
    return {
      id: job.id,
      company: {
        id: job.company.id,
        name: job.company.name,
      },
      title: job.title,
      endTime: job.end_time,
    };
  });
};
