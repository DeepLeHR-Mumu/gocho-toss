import { UseFormReturn } from "react-hook-form";

import { CompanyAuthFormValues } from "../type";

export interface RegistrationPartProps {
  companyAuthForm: UseFormReturn<CompanyAuthFormValues>;
}
