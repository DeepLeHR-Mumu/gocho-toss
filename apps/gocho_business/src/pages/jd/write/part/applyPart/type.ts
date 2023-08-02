import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { JdFormValues } from "../../../upload/type";

export interface ApplyPartProps {
  jdForm: UseFormReturn<JdFormValues>;
  processArr: UseFieldArrayReturn<JdFormValues, "process_arr", "id">;
  applyRouteArr: UseFieldArrayReturn<JdFormValues, "apply_route_arr", "id">;
  applyDocumentArr: UseFieldArrayReturn<JdFormValues, "apply_document_arr", "id">;
  etcArr: UseFieldArrayReturn<JdFormValues, "etc_arr", "id">;
}
