import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { AddJdFormValues } from "../../../upload/type";

export interface ApplyPartProps {
  jdForm: UseFormReturn<AddJdFormValues>;
  processArr: UseFieldArrayReturn<AddJdFormValues, "apply.process", "id">;
  applyDocumentArr: UseFieldArrayReturn<AddJdFormValues, "apply.document", "id">;
  etcArr: UseFieldArrayReturn<AddJdFormValues, "apply.etc", "id">;
}
