import { Control, UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../../upload/type";

export interface ConditionPartProps {
  jobForm: UseFormReturn<JobFormValues>;
  control: Control<JobFormValues>;
  payArr: UseFieldArrayReturn<JobFormValues, "pay_arr", "id">;
}