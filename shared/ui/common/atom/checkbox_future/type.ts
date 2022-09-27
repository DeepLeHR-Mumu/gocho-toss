import { UseFormRegisterReturn } from "react-hook-form";

export interface CheckBoxProps {
  type: "checkbox" | "radio";
  registerObj: UseFormRegisterReturn;
  value: string;
  text: string;
  checked?: boolean;
}
