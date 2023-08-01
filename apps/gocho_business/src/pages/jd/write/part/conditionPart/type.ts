import { Control, UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { JdFormValues } from "../../../upload/type";

export interface ConditionPartProps {
  jdForm: UseFormReturn<JdFormValues>;
  control: Control<JdFormValues>;
  payArr: UseFieldArrayReturn<JdFormValues, "pay_arr", "id">;
}
