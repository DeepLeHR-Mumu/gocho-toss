import { UseFormRegisterReturn } from "react-hook-form";

export interface TextInputFormProps {
  placeholder: string;
  activeBorderStyle?: "gray" | "blue";
  fullWidth?: boolean;
  registerObj: UseFormRegisterReturn;
  minWidth?: "auto" | number;
  maxLength?: number;
}

export interface textFormValues {
  birthday: string;
}
