import { UseFormReturn } from "react-hook-form";
import { JobFormValues } from "@pages/jd/type";

export interface PositionRequiredDataPartProps {
  id: string;
  index: number;
  jobForm: UseFormReturn<JobFormValues>;
}
