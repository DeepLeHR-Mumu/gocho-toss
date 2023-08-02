import { UseFormReturn } from "react-hook-form";
import { CompanyFormValues } from "@/pages/company/edit/type";

export interface FactoryPartProps {
  companyForm: UseFormReturn<CompanyFormValues>;
}
