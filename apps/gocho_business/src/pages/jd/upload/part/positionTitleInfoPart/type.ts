import { UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface PositionTitleInfoPartProps {
  id: string;
  index: number;
  jobForm: UseFormReturn<JobFormValues>;
}
