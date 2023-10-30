import { FieldErrors } from "react-hook-form";
import { HighSchoolAttendance, PostHighSchoolDef } from "@/apis/resume/education/type";

export const isErrorAlternativeTest = (
  error: FieldErrors<PostHighSchoolDef>,
  isAlternativeTest: boolean
): "disabled" | "error" | "default" => {
  if (isAlternativeTest) return "disabled";

  if (error.name) return "error";

  return "default";
};

export const isPerfectCalculator = (attendanceObj: HighSchoolAttendance, total: number) => {
  let sum = total;

  Object.entries(attendanceObj).forEach(([key, value]) => {
    if (!["is_perfect", "description", "total_class_days"].includes(key)) sum += Number(value);
  });

  return total === sum;
};

export const getLatestAttendanceError = (attendanceError: FieldErrors<PostHighSchoolDef>) => {
  let errorMessage = "";

  Object.entries(attendanceError).some(([key, value]) => {
    if (
      key.startsWith("first_attendance") ||
      key.startsWith("second_attendance") ||
      key.startsWith("third_attendance")
    ) {
      const errorMessages = Object.values(value).map((error) => error.message);
      if (errorMessages.length > 0) {
        [errorMessage] = errorMessages;
        return true;
      }
    }
    return false;
  });

  return errorMessage;
};
