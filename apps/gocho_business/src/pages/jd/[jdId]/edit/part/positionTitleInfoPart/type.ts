import { Control, UseFormReturn } from "react-hook-form";

import { JdFormValues } from "../../type";

export interface PositionTitleInfoPartProps {
  jdForm: UseFormReturn<JdFormValues>;
  control: Control<JdFormValues>;
}
