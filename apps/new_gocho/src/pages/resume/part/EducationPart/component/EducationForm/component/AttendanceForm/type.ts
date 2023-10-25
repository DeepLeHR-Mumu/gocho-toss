import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { PostHighSchoolDef } from "@/apis/resume/education/type";

export interface AttendanceFormProps {
  setValue: UseFormSetValue<PostHighSchoolDef>;
  register: UseFormRegister<PostHighSchoolDef>;
}
