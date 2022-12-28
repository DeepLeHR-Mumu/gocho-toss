import { UseFieldArrayAppend, UseFieldArrayRemove, UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface PositionTitleInfoPartProps {
  id: string;
  index: number;
  jobForm: UseFormReturn<JobFormValues>;
  append: UseFieldArrayAppend<JobFormValues, "position_arr">;
  remove: UseFieldArrayRemove;
}
