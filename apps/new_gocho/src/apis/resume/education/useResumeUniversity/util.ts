import { ResumeUniversityDef } from "../type";

export const selector = (universityArr: ResumeUniversityDef[]) =>
  universityArr.map((university) => ({
    id: university.id,
    name: university.name,
    graduateType: university.graduate_type,
    startDate: university.start_date,
    endDate: university.end_date,
    major: university.major,
    grade: university.grade,
    maxGrade: university.max_grade,
    etc: university.etc,
    isUTurn: university.is_uturn,
  }));
