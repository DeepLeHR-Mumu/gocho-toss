// type EducationSubmitDef = PostHighSchoolDef | PostCollegeDef | PostUniversityDef | PostExtraDef;

import { SelectorResumeEducation } from "@/apis/resume/education/useResumeEducationArr/type";

export interface EducationFormProps {
  resumeId: number;
  handleEditMode: () => void;
  currentEducation?: SelectorResumeEducation;
}
