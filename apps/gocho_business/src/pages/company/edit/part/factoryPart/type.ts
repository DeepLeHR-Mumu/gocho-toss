import { UseFormReturn } from "react-hook-form";
import { CompanyFormValues } from "@/pages/company/edit/type";

export interface FactoryDef {
  id?: number;
  factory_name: string;
  product: string;
  address: string;
  male_number: number;
  female_number: number;
  bus_bool: boolean;
  bus_etc: string | null;
  dormitory_bool: boolean;
  dormitory_etc: string | null;
}

export interface FactoryPartProps {
  companyForm: UseFormReturn<CompanyFormValues>;
}
