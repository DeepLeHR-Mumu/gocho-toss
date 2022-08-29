import { UseFormRegisterReturn } from "react-hook-form";

export interface NumberInputFormProps {
  registerObj: UseFormRegisterReturn;
  firstDesc: string;
  lastDesc: string;
  id: string;
  placeholder?: string;
  width?: number | "auto";
}
