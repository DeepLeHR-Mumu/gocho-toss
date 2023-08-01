import { UseFormReturn } from "react-hook-form";
import { CompanyAuthFormValues } from "../type";

export interface FactoryDef {
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

export interface AuthFactoryPartProps {
  companyAuthForm: UseFormReturn<CompanyAuthFormValues>;
}
