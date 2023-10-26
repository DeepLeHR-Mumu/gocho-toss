import { Control, FieldErrors, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { PostHighSchoolDef } from "@/apis/resume/education/type";

export interface HighSchoolFormProps {
  control: Control<PostHighSchoolDef>;
  errors: FieldErrors<PostHighSchoolDef>;
  register: UseFormRegister<PostHighSchoolDef>;
  setValue: UseFormSetValue<PostHighSchoolDef>;
  getValues: UseFormGetValues<PostHighSchoolDef>;
}
