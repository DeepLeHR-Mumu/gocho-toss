import { UserResumeApplyDef } from "../type";

export const selector = (data: UserResumeApplyDef[]) => {
  data.map((apply) => ({
    id: apply.id,
    status: apply.status,
    company: {
      id: apply.company.id,
      name: apply.company.name,
    },
    jd: {
      id: apply.jd.id,
      title: apply.jd.title,
      startTime: apply.jd.start_time,
      endTime: apply.jd.id,
      isExpired: apply.jd.id,
    },
    isRead: apply.is_read,
    createdTime: apply.created_time,
  }));
};
