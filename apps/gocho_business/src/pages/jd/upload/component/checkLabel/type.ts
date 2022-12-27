import { UseFormRegister } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface CheckLabelProps {
  register: UseFormRegister<JobFormValues>;
  index: number;
  field: "required_exp" | "contract_type" | "place.type";
  value: string;
  watch: string;
}
