import { UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface PositionRequiredInfoPartProps {
  id: string;
  index: number;
  jobForm: UseFormReturn<JobFormValues>;
}
