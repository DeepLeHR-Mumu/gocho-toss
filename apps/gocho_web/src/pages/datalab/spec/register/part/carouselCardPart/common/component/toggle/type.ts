import { UseFormRegisterReturn } from "react-hook-form";

export interface ToggleProps {
  yesDesc: string;
  noDesc: string;
  id: string;
  value: boolean;
  registerObj: UseFormRegisterReturn;
}
