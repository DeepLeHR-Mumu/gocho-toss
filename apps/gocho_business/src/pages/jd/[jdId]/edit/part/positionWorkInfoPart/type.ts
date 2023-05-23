import { Control, UseFormReturn } from "react-hook-form";
import { JdFormValues } from "../../type";

export interface PositionWorkInfoPartProps {
  jdForm: UseFormReturn<JdFormValues>;
  control: Control<JdFormValues>;
}
