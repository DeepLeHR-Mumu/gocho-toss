import { UseFieldArrayAppend } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface PositionHeaderPartProps {
  append: UseFieldArrayAppend<JobFormValues, "position_arr">;
}
