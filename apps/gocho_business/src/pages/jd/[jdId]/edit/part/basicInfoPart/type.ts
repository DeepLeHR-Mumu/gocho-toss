import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { JdFormValues } from "../../type";

export interface BasicInfoPartProps {
  jdForm: UseFormReturn<JdFormValues>;
  processArr: UseFieldArrayReturn<JdFormValues, "process_arr", "id">;
  applyRouteArr: UseFieldArrayReturn<JdFormValues, "apply_route_arr", "id">;
  etcArr: UseFieldArrayReturn<JdFormValues, "etc_arr", "id">;
}
