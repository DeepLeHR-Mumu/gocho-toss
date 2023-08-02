import { UseFormReturn } from "react-hook-form";

import { CompanyAuthFormValues } from "../type";

export interface AuthInfoPartProps {
  companyAuthForm: UseFormReturn<CompanyAuthFormValues>;
  companyDetailData: {
    name: string;
    businessNumber: string;
  };
}
