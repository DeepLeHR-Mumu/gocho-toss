import { PostCollegeDef, PostExtraDef, PostHighSchoolDef, PostUniversityDef } from "@/apis/resume/education/type";
import { SelectorResumeEducation } from "@/apis/resume/education/useResumeEducationArr/type";

export type EducationSubmitDef = PostHighSchoolDef | PostCollegeDef | PostUniversityDef | PostExtraDef;

export interface EducationFormProps {
  resumeId: number;
  handleEditMode: () => void;
  currentEducation?: SelectorResumeEducation;
}
