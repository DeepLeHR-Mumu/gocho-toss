import { UseFormReturn } from "react-hook-form";
import { CompanyAuthFormValues } from "../applyAuthPart/type";

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
