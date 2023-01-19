import { UseFormRegisterReturn } from "react-hook-form";

export interface CheckBoxWithDescProps {
  registerObj: UseFormRegisterReturn;
  id: string;
  desc: string;
  isDisabled?: boolean;
  checked?: boolean;
}
