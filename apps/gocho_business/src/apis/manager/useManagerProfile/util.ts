import { ResponseObjDef } from "./type";

export const managerProfileSelector = ({ data }: ResponseObjDef) => ({
  id: data.id,
  email: data.email,
  name: data.name,
  department: data.department,
  company: {
    id: data.company.id,
    name: data.company.name,
    logoUrl: data.company.logo_url,
    industry: data.company.industry,
    view: data.company.view,
    progressJdCount: data.company.progress_jd_count,
    waitingJdCount: data.company.waiting_jd_count,
  },
  status: {
    name: data.status.name,
    reason: data.status.reason,
    authenticatedTime: data.status.authenticated_time,
    isFirst: data.status.is_first,
  },
});
