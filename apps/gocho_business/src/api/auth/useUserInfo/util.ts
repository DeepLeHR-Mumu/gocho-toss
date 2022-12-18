import { UserInfoObjDef } from "./type";

export const selector = (data: UserInfoObjDef) => ({
  sub: data.sub,
  id: data.id,
  companyId: data.company_id,
  companyName: data.company_name,
  email: data.email,
  name: data.name,
  department: data.department,
  role: data.role,
  type: data.type,
  iat: data.iat,
  exp: data.exp,
  iss: data.iss,
});
