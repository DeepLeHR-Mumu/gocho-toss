import { jobBookmarkResObjDef } from "../../type/bookmark";

export const selector = ({ data }: jobBookmarkResObjDef) => {
  return data.map((job) => {
    return {
      id: job.id,
      title: job.title,
      endTime: job.end_time,
      company: job.company,
    };
  });
};
