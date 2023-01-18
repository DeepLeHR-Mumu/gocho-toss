import { Control, UseFieldArrayAppend, UseFieldArrayRemove, UseFormReturn } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { JdFormValues } from "../../type";

export interface PositionTitleInfoPartProps {
  id: string;
  positionIndex: number;
  jdForm: UseFormReturn<JdFormValues>;
  appendPosition: UseFieldArrayAppend<JdFormValues, "position_arr">;
  removePosition: UseFieldArrayRemove;
  control: Control<JdFormValues>;
  isCardOpen: boolean;
  setIsCardOpen: Dispatch<SetStateAction<boolean[]>>;
}
