import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface AccountInputProps {
  placeholder: string;
  label: string;
  setValue: () => void;
  registerObj: UseFormRegisterReturn;
  errorObj: FieldError | undefined;
  isDirty: boolean | undefined;
  inputType: "text" | "password" | "email";
}

export type ColorStateDef = "error" | "focus" | "default" | "success";
