import { ResumeExtraDef } from "../type";

export const selector = (extraArr: ResumeExtraDef[]) =>
  extraArr.map((extra) => ({
    id: extra.id,
    name: extra.name,
    graduateType: extra.graduate_type,
    startDate: extra.start_date,
    endDate: extra.end_date,
    major: extra.major,
    grade: extra.grade,
    maxGrade: extra.max_grade,
    etc: extra.etc,
  }));
