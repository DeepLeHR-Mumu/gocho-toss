import { UseFieldArrayRemove, UseFormReturn } from "react-hook-form";
import { CompanyFormValues } from "../../../type";

export interface FactoryBoxProps {
  index: number;
  companyForm: UseFormReturn<CompanyFormValues>;
  remove: UseFieldArrayRemove;
}
