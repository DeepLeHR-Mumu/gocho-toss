import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface LoginFormValues {
  email: string;
}

export interface AccountInputProps {
  placeholder: string;
  label: string;
  setError: () => void;
  setValue: () => void;
  registerObj: UseFormRegisterReturn;
  errorObj: FieldError | undefined;
  isDirty: boolean | undefined;
  inputType: "text" | "password" | "email";
}

export type ColorStateDef = "error" | "focus" | "default" | "success";
