import { UseFormReturn } from "react-hook-form";

import { CompanyAuthFormValues } from "../applyAuthPart/type";

export interface AuthBasicPartProps {
  companyAuthForm: UseFormReturn<CompanyAuthFormValues>;
  isOtherEdit: boolean;
}
