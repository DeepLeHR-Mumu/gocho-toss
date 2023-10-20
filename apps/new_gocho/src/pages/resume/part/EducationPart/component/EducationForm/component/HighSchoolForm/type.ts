import { UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { PostHighSchoolDef } from "@/apis/resume/education/type";

export interface HighSchoolFormProps {
  register: UseFormRegister<PostHighSchoolDef>;
  setValue: UseFormSetValue<PostHighSchoolDef>;
  getValues: UseFormGetValues<PostHighSchoolDef>;
}
