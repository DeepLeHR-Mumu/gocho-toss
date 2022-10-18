import { UseFormRegisterReturn } from "react-hook-form";

export interface SelectChipFormProps {
  value: string | undefined;
  selectArr: string[] | undefined;
  index: number;
  desc: string;
  registerObj: UseFormRegisterReturn;
}
