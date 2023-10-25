import { FieldErrors } from "react-hook-form";
import { PostHighSchoolDef } from "@/apis/resume/education/type";

export const isErrorAlternativeTest = (
  error: FieldErrors<PostHighSchoolDef>,
  isAlternativeTest: boolean
): "disabled" | "error" | "default" => {
  if (isAlternativeTest) return "disabled";

  if (error.name) return "error";

  return "default";
};
