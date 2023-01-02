import { UseFormRegisterReturn, UseFormSetValue } from "react-hook-form";
import { PostSubmitValues } from "../../type";

export type WelfareKey =
  | "welfare.money"
  | "welfare.health"
  | "welfare.life"
  | "welfare.holiday"
  | "welfare.facility"
  | "welfare.vacation"
  | "welfare.growth"
  | "welfare.etc";

export interface WelfareFormProps {
  setValue: UseFormSetValue<PostSubmitValues>;
  title: string;
  desc: string;
  registerObj: UseFormRegisterReturn;
  valueArr: string[] | null;
}
