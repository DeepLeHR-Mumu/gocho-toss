import { UseFormReturn } from "react-hook-form";

import { CompanyFormValues } from "../../type";

export interface BasicPartProps {
  companyForm: UseFormReturn<CompanyFormValues>;
  isOtherEdit: boolean;
}
