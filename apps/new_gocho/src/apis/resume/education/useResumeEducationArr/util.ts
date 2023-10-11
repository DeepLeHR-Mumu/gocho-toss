import { ResumeEducationDef } from "../type";

export const selector = (educationArr: ResumeEducationDef[]) =>
  educationArr.map((education) => ({
    id: education.id,
    name: education.name,
    educationType: education.education_type,
    isUturn: education.is_uturn,
    startData: education.start_date,
    endData: education.end_date,
    major: education.major,
  }));
