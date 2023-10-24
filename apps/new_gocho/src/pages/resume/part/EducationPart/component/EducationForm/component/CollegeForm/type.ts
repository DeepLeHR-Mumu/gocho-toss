import { UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { PostCollegeDef } from "@/apis/resume/education/type";

export interface CollegeFormProps {
  register: UseFormRegister<PostCollegeDef>;
  setValue: UseFormSetValue<PostCollegeDef>;
  getValues: UseFormGetValues<PostCollegeDef>;
}