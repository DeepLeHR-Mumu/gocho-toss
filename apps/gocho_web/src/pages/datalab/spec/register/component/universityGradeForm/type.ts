import { UseFormRegisterReturn } from "react-hook-form";

export interface UniversityGradeFormProps {
  gradeValue: number;
  maxGradeValue: 4.3 | 4.5;
  selectArr: [4.3, 4.5];
  gradeObj: UseFormRegisterReturn;
  maxGradeObj: UseFormRegisterReturn;
}
