import { Control, UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../../upload/type";

export interface RequiredPartProps {
  jobForm: UseFormReturn<JobFormValues>;
  control: Control<JobFormValues>;
  requiredEtcArr: UseFieldArrayReturn<JobFormValues, "required_etc_arr", "id">;
  preferredEtcArr: UseFieldArrayReturn<JobFormValues, "preferred_etc_arr", "id">;
}
