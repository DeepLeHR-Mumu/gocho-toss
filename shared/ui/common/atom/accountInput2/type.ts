import { UseFormRegisterReturn } from "react-hook-form";

export interface AccountInputProps {
  placeholder: string;
  label: string;
  setValue: () => void;
  clearError: () => void;
  watch: string | number | undefined;
  registerObj: UseFormRegisterReturn;
  errorMsg: string | undefined;
  inputType: "text" | "password" | "email";
}

export type ColorStateDef = "error" | "focus" | "default" | "success";
