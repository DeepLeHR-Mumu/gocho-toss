import { Control, FieldErrors, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { PostExtraDef } from "@/apis/resume/education/type";

export interface ExtraFormProps {
  errors: FieldErrors<PostExtraDef>;
  control: Control<PostExtraDef>;
  register: UseFormRegister<PostExtraDef>;
  setValue: UseFormSetValue<PostExtraDef>;
  getValues: UseFormGetValues<PostExtraDef>;
}
