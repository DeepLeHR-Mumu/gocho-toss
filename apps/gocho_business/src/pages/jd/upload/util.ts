import { UseFormReturn, UseFormWatch } from "react-hook-form";
import { JobFormValues } from "@/pages/jd/upload/type";

export const getFieldArrayValue = (arrData: { value: string }[]) =>
  arrData.filter((item) => item.value.trim() !== "").map((item) => item.value);

export const getFieldArrayValueWithNull = (arrData: { value: string }[]) =>
  arrData.every((field) => !field.value || field.value.trim() === "")
    ? null
    : arrData.filter((item) => item.value.trim() !== "").map((item) => item.value);

export const setFieldErrorIfEmpty = (
  watch: UseFormWatch<JobFormValues>,
  jobForm: UseFormReturn<JobFormValues>,
  fieldName: "task_detail_arr" | "pay_arr" | "process_arr" | "apply_route_arr",
  errorMessage: string
) => {
  if (watch(fieldName).length === 0 || watch(fieldName).every((field) => !field.value || field.value.trim() === "")) {
    jobForm.setError(fieldName, {
      message: errorMessage,
    });
  } else jobForm.clearErrors(fieldName);
};

export const setFieldArray = (arrData: string[]) =>
  arrData.length === 0 ? [{ value: "" }] : arrData.map((item) => ({ value: item || "" }));
