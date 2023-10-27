import { UseFormRegister } from "react-hook-form";
import { PostHighSchoolDef } from "@/apis/resume/education/type";

export interface AttendanceFormProps {
  register: UseFormRegister<PostHighSchoolDef>;
}

export type Grade = "first_attendance" | "second_attendance" | "third_attendance";
export type Attendance =
  | "disease_school_absent"
  | "disease_tardy"
  | "disease_leave"
  | "disease_subject_absent"
  | "unauthorized_school_absent"
  | "unauthorized_tardy"
  | "unauthorized_leave"
  | "unauthorized_subject_absent"
  | "extra_school_absent"
  | "extra_tardy"
  | "extra_leave"
  | "extra_subject_absent";
