import { JdStatistics } from "../type";

export const selector = (jdStatistics: JdStatistics) => ({
  view: jdStatistics.view,
  totalApplicant: jdStatistics.total_applicant,
  unreadApplicant: jdStatistics.unread_applicant,
  bookmark: jdStatistics.bookmark,
});
