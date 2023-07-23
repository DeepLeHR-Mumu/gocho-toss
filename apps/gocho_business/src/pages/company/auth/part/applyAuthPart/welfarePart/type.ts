import { UseFormReturn } from "react-hook-form";
import { CompanyAuthFormValues } from "../type";

export type WelfareKey =
  | "welfare.money"
  | "welfare.health"
  | "welfare.life"
  | "welfare.holiday"
  | "welfare.facility"
  | "welfare.vacation"
  | "welfare.growth"
  | "welfare.etc";

export interface PostWelfareSubmitValues {
  money: string[] | null;
  health: string[] | null;
  life: string[] | null;
  holiday: string[] | null;
  facility: string[] | null;
  vacation: string[] | null;
  growth: string[] | null;
  etc: string[] | null;
}

export interface AuthWelfarePartProps {
  companyAuthForm: UseFormReturn<CompanyAuthFormValues>;
  companyData: {
    welfare: {
      money: string[] | null;
      health: string[] | null;
      life: string[] | null;
      holiday: string[] | null;
      facility: string[] | null;
      vacation: string[] | null;
      growth: string[] | null;
      etc: string[] | null;
    } | null;
    uploader: {
      isMine: boolean;
    };
  };
}
