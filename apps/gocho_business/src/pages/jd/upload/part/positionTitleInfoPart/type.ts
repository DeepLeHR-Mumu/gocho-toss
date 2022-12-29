import { Control, UseFieldArrayAppend, UseFieldArrayRemove, UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface PositionTitleInfoPartProps {
  id: string;
  positionIndex: number;
  jobForm: UseFormReturn<JobFormValues>;
  appendPosition: UseFieldArrayAppend<JobFormValues, "position_arr">;
  removePosition: UseFieldArrayRemove;
  control: Control<JobFormValues>;
}
