import { Control, UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface PositionWorkInfoPartProps {
  jobForm: UseFormReturn<JobFormValues>;
  control: Control<JobFormValues>;
}
