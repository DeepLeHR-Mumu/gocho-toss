import { Control, UseFormReturn } from "react-hook-form";
import { JdFormValues } from "../../type";

export interface PositionWorkInfoPartProps {
  id: string;
  positionIndex: number;
  jdForm: UseFormReturn<JdFormValues>;
  control: Control<JdFormValues>;
}
