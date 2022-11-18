import { UseFormRegisterReturn } from "react-hook-form";

export interface ToggleFormProps {
  yesDesc: string;
  noDesc: string;
  id: string;
  value: boolean;
  registerObj: UseFormRegisterReturn;
}
