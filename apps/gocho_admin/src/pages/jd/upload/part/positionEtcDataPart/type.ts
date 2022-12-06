import { UseFieldArrayAppend, UseFieldArrayRemove, UseFormReturn } from "react-hook-form";
import { JobFormValues } from "@pages/jd/type";

export interface PositionBoxProps {
  id: string;
  index: number;
  jobForm: UseFormReturn<JobFormValues>;

  append: UseFieldArrayAppend<JobFormValues, "position_arr">;
  remove: UseFieldArrayRemove;
}
