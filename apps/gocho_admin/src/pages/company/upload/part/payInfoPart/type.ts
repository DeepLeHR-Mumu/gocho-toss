import { UseFormRegister } from "react-hook-form";
import { CompanyFormValues } from "@pages/company/upload/type";

export interface PayInfoPartProps {
  register: UseFormRegister<CompanyFormValues>;
}
