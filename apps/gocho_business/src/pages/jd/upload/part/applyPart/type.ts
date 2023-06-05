import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface ApplyPartProps {
  jobForm: UseFormReturn<JobFormValues>;
  processArr: UseFieldArrayReturn<JobFormValues, "process_arr", "id">;
  applyRouteArr: UseFieldArrayReturn<JobFormValues, "apply_route_arr", "id">;
}
