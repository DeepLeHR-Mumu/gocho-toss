import { UseFormReturn } from "react-hook-form";
import { CompanyFormValues } from "@/pages/company/edit/type";

export interface FactoryPartProps {
  companyForm: UseFormReturn<CompanyFormValues>;
  companyData: {
    factory: {
      id: number;
      name: string;
      address: string;
      maleNumber: number;
      femaleNumber: number;
      product: string;
      bus: {
        exists: boolean;
        desc: string | null;
      };
      dormitory: {
        exists: boolean;
        desc: string | null;
      };
    }[];
  };
}
