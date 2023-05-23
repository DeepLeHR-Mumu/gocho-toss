import { Control, UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface PositionTitleInfoPartProps {
  jobForm: UseFormReturn<JobFormValues>;
  control: Control<JobFormValues>;
}
