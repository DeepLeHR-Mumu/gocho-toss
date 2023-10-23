import { UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { PostExtraDef } from "@/apis/resume/education/type";

export interface ExtraFormProps {
  register: UseFormRegister<PostExtraDef>;
  setValue: UseFormSetValue<PostExtraDef>;
  getValues: UseFormGetValues<PostExtraDef>;
}
