import { UseFormReturn } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";

import { CompanyFormValues } from "../../type";

export interface CompanyInfoProps {
  companyForm: UseFormReturn<CompanyFormValues>;
  setBgImage: Dispatch<SetStateAction<File | undefined>>;
  setLogo: Dispatch<SetStateAction<File | undefined>>;
}
