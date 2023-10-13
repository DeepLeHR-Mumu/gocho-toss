import { UseFormRegisterReturn } from "react-hook-form";

export interface CheckBoxWithDescProps {
  registerObj: UseFormRegisterReturn;
  id: string;
  desc: string;
  value?: string;
  isDisabled?: boolean;
  checked?: boolean;
}
