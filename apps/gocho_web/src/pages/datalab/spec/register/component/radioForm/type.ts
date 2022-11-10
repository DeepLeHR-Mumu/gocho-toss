import { UseFormRegisterReturn } from "react-hook-form";

export interface RadioFormProps {
  itemArr: string[];
  backgroundStyle?: "blue01" | "blue02";
  registerObj: UseFormRegisterReturn;
}
