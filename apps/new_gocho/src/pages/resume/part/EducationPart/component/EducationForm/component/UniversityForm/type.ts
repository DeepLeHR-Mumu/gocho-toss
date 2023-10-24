import { UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { PostUniversityDef } from "@/apis/resume/education/type";

export interface UniversityFormProps {
  register: UseFormRegister<PostUniversityDef>;
  setValue: UseFormSetValue<PostUniversityDef>;
  getValues: UseFormGetValues<PostUniversityDef>;
}