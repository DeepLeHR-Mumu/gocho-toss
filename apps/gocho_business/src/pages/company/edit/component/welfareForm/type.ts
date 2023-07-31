import { UseFormReturn } from "react-hook-form";
import { CompanyFormValues } from "../../type";

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
  title: string;
  desc: string;
  registerKey: WelfareKey;
  welfareValueArr: string[] | null;
  companyFormObj: UseFormReturn<CompanyFormValues>;
}
