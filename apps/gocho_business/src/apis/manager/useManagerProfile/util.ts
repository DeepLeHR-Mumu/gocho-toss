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
  },
});
