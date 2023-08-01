import { Control, UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { JdFormValues } from "../../../upload/type";

export interface BasicPartProps {
  jdForm: UseFormReturn<JdFormValues>;
  control: Control<JdFormValues>;
  taskDetailArr: UseFieldArrayReturn<JdFormValues, "task_detail_arr", "id">;
}
