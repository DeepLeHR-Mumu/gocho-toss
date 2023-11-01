import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { AddJdFormValues } from "../../../upload/type";

export interface RequiredPartProps {
  jdForm: UseFormReturn<AddJdFormValues>;
  requiredEtcArr: UseFieldArrayReturn<AddJdFormValues, "qualification.required_etc", "id">;
  preferredEtcArr: UseFieldArrayReturn<AddJdFormValues, "qualification.preferred_etc", "id">;
}
