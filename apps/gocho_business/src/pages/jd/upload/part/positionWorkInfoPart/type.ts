import { UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface PositionWorkInfoPartProps {
  id: string;
  index: number;
  jobForm: UseFormReturn<JobFormValues>;
}
