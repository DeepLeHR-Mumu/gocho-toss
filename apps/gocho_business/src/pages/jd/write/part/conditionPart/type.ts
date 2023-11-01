import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { AddJdFormValues } from "../../../upload/type";

export interface ConditionPartProps {
  jdForm: UseFormReturn<AddJdFormValues>;
  payArr: UseFieldArrayReturn<AddJdFormValues, "detail.pay", "id">;
}
