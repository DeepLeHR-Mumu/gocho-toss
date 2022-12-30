import { Control, UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface PositionWorkInfoPartProps {
  id: string;
  positionIndex: number;
  jobForm: UseFormReturn<JobFormValues>;
  control: Control<JobFormValues>;
}
