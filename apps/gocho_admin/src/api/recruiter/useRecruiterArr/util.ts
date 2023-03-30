import { ResponseObjDef } from "./type";

export const recruiterArrSelector = ({ data: recruiterArr, count }: ResponseObjDef) => {
  const recruiterDataArr = recruiterArr.map((recruiter) => ({
    email: recruiter.email,
    name: recruiter.name,
    department: recruiter.department,
  }));
  return { recruiterDataArr, count };
};
