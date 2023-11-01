import { UseFormReturn, UseFormWatch } from "react-hook-form";
import { EditJdFormValues } from "./type";

export const getFieldArrayValue = (arrData: { value: string }[]) =>
  arrData.filter((item) => item.value.trim() !== "").map((item) => item.value);

export const getFieldArrayValueWithNull = (arrData: { value: string }[]) =>
  arrData.every((field) => !field.value || field.value.trim() === "")
    ? null
    : arrData.filter((item) => item.value.trim() !== "").map((item) => item.value);

export const setFieldErrorIfEmpty = (
  watch: UseFormWatch<EditJdFormValues>,
  jdForm: UseFormReturn<EditJdFormValues>,
  fieldName: "detail.task_description" | "detail.pay" | "apply.process" | "apply.route",
  errorMessage: string
) => {
  if (fieldName === "apply.route") {
    // TODO type 별로 분기처리해야할 지도
    if (watch(fieldName).link === "" || watch(fieldName).link?.trim() === "") {
      jdForm.setError(fieldName, {
        message: errorMessage,
      });
    }
    return;
  }

  if (watch(fieldName).length === 0) {
    jdForm.setError(fieldName, { message: errorMessage });
    return;
  }

  if (watch(fieldName).every((field) => !field.value || field.value.trim() === "")) {
    jdForm.setError(fieldName, {
      message: errorMessage,
    });
    return;
  }

  jdForm.clearErrors(fieldName);

  // if (watch(fieldName).length === 0 || watch(fieldName).every((field) => !field.value || field.value.trim() === "")) {
  //   jdForm.setError(fieldName, {
  //     message: errorMessage,
  //   });
  // } else jdForm.clearErrors(fieldName);
};

export const setFieldArray = (arrData: string[]) =>
  arrData.length === 0 ? [{ value: "" }] : arrData.map((item) => ({ value: item || "" }));
