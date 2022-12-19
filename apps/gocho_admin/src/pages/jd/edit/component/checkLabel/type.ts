import { UseFormRegister } from "react-hook-form";
import { JobFormValues } from "@pages/jd/type";

export interface CheckLabelProps {
  register: UseFormRegister<JobFormValues>;
  index: number;
  field: "required_exp" | "contract_type";
  value: string;
  watch: string;
}
