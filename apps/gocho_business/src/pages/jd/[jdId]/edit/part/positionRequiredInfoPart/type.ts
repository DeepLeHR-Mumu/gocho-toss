import { Control, UseFormReturn } from "react-hook-form";
import { JdFormValues } from "../../type";

export interface PositionRequiredInfoPartProps {
  jdForm: UseFormReturn<JdFormValues>;
  control: Control<JdFormValues>;
}
