import { UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface PositionBoxProps {
  id: string;
  index: number;
  jobForm: UseFormReturn<JobFormValues>;
}
