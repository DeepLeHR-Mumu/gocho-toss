import { UseFieldArrayRemove, UseFormReturn } from "react-hook-form";
import { CompanyFormValues } from "@pages/company/upload/type";

export interface FactoryBoxProps {
  index: number;
  companyForm: UseFormReturn<CompanyFormValues>;
  remove: UseFieldArrayRemove;
}
