import { Control, UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { JdFormValues } from "../../../upload/type";

export interface RequiredPartProps {
  jdForm: UseFormReturn<JdFormValues>;
  control: Control<JdFormValues>;
  requiredEtcArr: UseFieldArrayReturn<JdFormValues, "required_etc_arr", "id">;
  preferredEtcArr: UseFieldArrayReturn<JdFormValues, "preferred_etc_arr", "id">;
}
