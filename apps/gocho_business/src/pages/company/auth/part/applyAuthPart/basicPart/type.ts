import { UseFormReturn } from "react-hook-form";

import { CompanyAuthFormValues } from "../type";

export interface AuthBasicPartProps {
  companyAuthForm: UseFormReturn<CompanyAuthFormValues>;
}
