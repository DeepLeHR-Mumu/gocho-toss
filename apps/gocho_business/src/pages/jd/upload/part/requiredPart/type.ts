import { Control, UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface RequiredPartProps {
  jobForm: UseFormReturn<JobFormValues>;
  control: Control<JobFormValues>;
}
