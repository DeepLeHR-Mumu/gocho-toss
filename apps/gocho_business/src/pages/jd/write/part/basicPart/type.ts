import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { AddJdFormValues } from "../../../upload/type";

export interface BasicPartProps {
  jdForm: UseFormReturn<AddJdFormValues>;
  taskDetailArr: UseFieldArrayReturn<AddJdFormValues, "detail.task_description", "id">;
}
