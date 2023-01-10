import { ResponseObjDef } from "./type";

export const recruiterArrSelector = ({ data }: ResponseObjDef) =>
  data.map((recruiter) => ({ email: recruiter.email, name: recruiter.name, department: recruiter.department }));
