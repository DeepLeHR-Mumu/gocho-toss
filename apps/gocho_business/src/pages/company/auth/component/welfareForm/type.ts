import { UseFormReturn } from "react-hook-form";
import { CompanyAuthFormValues } from "../../part/applyAuthPart/type";

export type WelfareKey =
  | "welfare.money"
  | "welfare.health"
  | "welfare.life"
  | "welfare.holiday"
  | "welfare.facility"
  | "welfare.vacation"
  | "welfare.growth"
  | "welfare.etc";

export interface AuthWelfareFormProps {
  title: string;
  desc: string;
  isMine: boolean;
  registerKey: WelfareKey;
  welfareValueArr: string[] | null;
  companyFormObj: UseFormReturn<CompanyAuthFormValues>;
}
