import { FieldErrors, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { PostUniversityDef } from "@/apis/resume/education/type";

export interface UniversityFormProps {
  errors: FieldErrors<PostUniversityDef>;
  register: UseFormRegister<PostUniversityDef>;
  setValue: UseFormSetValue<PostUniversityDef>;
  getValues: UseFormGetValues<PostUniversityDef>;
}
