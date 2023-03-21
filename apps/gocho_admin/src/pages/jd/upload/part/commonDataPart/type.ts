import { UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface CommonDataPartProps {
  jobForm: UseFormReturn<JobFormValues>;
}
