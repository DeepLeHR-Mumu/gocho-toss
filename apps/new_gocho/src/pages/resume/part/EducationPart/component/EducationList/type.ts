import {
  SelectorResumeEducationArr,
  SelectorResumeEducation,
} from "@/apis/resume/education/useResumeEducationArr/type";

export interface EducationListProps {
  resumeId: number;
  myEducationList: SelectorResumeEducationArr;
  selectEducation: (education: SelectorResumeEducation) => void;
}
