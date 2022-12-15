import { RecruiterDef } from "./type";

export const recruiterArrSelector = (recruiterArr: RecruiterDef[], count: number) => {
  const recruiterDataArr = recruiterArr.map((recruiter) => {
    return {
      email: recruiter.email,
      name: recruiter.name,
      department: recruiter.department,
    };
  });
  return { recruiterDataArr, count };
};
