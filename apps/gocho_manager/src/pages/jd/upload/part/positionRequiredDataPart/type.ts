import { UseFormReturn } from "react-hook-form";
import { JobFormValues } from "@pages/jd/upload/type";

export interface PositionBoxProps {
  id: string;
  index: number;
  jobForm: UseFormReturn<JobFormValues>;
}
