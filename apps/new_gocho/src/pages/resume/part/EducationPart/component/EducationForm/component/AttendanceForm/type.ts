import { UseFormRegister } from "react-hook-form";
import { PostHighSchoolDef } from "@/apis/resume/education/type";

export interface AttendanceFormProps {
  register: UseFormRegister<PostHighSchoolDef>;
}
