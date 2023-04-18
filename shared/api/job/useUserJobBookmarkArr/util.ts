import { jobBookmarkResObjDef } from "../../bookmark/type/bookmark";

export const selector = ({ data }: jobBookmarkResObjDef) => {
  if (data === null) {
    return null;
  }
  return data.map((job) => {
    return {
      id: job.id,
      title: job.title,
      cut: job.cut,
      endTime: job.end_time,
      companyName: job.company.name,
      companyLogo: job.company.logo_url,
    };
  });
};
