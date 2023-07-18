import { UseFormReturn } from "react-hook-form";

import { CompanyAuthFormValues } from "../applyAuthPart/type";

export interface RegistrationPartProps {
  companyAuthForm: UseFormReturn<CompanyAuthFormValues>;
}
