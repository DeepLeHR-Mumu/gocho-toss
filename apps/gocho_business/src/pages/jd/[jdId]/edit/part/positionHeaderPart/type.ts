import { UseFieldArrayAppend } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { JdFormValues } from "../../type";

export interface PositionHeaderPartProps {
  append: UseFieldArrayAppend<JdFormValues, "position_arr">;
  setIsCardOpen: Dispatch<SetStateAction<boolean[]>>;
}
