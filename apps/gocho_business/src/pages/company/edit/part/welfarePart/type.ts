import { UseFormReturn } from "react-hook-form";
import { CompanyFormValues } from "../../type";

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

export interface WelfarePartProps {
  companyForm: UseFormReturn<CompanyFormValues>;
}
