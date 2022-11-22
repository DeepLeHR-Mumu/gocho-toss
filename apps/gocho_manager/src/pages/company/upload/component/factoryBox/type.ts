import { UseFieldArrayRemove, UseFormRegister, UseFormWatch } from "react-hook-form";
import { CompanyFormValues } from "@pages/company/upload/type";

export interface FactoryBoxProps {
  index: number;
  register: UseFormRegister<CompanyFormValues>;
  watch: UseFormWatch<CompanyFormValues>;
  remove: UseFieldArrayRemove;
}
