import { ResumeCollegeDef } from "../type";

export const selector = (college: ResumeCollegeDef) => ({
  id: college.id,
  name: college.name,
  startDate: college.start_date,
  endDate: college.end_date,
  major: college.major,
  graduateType: college.graduate_type,
  grade: college.grade,
  maxGrade: college.max_grade,
  etc: college.etc,
});
