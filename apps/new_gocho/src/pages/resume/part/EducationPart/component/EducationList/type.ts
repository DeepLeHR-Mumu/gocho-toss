import {
  SelectorResumeEducationArr,
  SelectorResumeEducation,
} from "@/apis/resume/education/useResumeEducationArr/type";

export interface EducationListProps {
  resumeId: number;
  myEducationList: SelectorResumeEducationArr;
  selectEducation: (education: SelectorResumeEducation) => void;
}

export type SelectorAttendance =
  | "diseaseSchoolAbsent"
  | "diseaseTardy"
  | "diseaseLeave"
  | "diseaseSubjectAbsent"
  | "unauthorizedSchoolAbsent"
  | "unauthorizedTardy"
  | "unauthorizedLeave"
  | "unauthorizedSubjectAbsent"
  | "extraSchoolAbsent"
  | "extraTardy"
  | "extraLeave"
  | "extraSubjectAbsent";
