import { UseFieldArrayAppend } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { JobFormValues } from "../../type";

export interface PositionHeaderPartProps {
  append: UseFieldArrayAppend<JobFormValues, "position_arr">;
  setIsCardOpen: Dispatch<SetStateAction<boolean[]>>;
}
