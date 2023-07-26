import { Control, UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface BasicPartProps {
  jobForm: UseFormReturn<JobFormValues>;
  control: Control<JobFormValues>;
  taskDetailArr: UseFieldArrayReturn<JobFormValues, "task_detail_arr", "id">;
}
