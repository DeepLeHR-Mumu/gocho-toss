import { UseFormRegisterReturn } from "react-hook-form";

export interface SelectChipFormProps {
  value: string | undefined;
  selectArr: string[];
  index: number;
  desc: string;
  registerObj: UseFormRegisterReturn;
}
