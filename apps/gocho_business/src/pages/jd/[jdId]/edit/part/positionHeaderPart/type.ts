import { FieldArrayWithId, UseFieldArrayAppend } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { JobFormValues } from "@/pages/jd/upload/type";
import { JdFormValues } from "../../type";

export interface PositionHeaderPartProps {
  fields: FieldArrayWithId<JobFormValues, "position_arr", "id">[];
  append: UseFieldArrayAppend<JdFormValues, "position_arr">;
  setIsCardOpen: Dispatch<SetStateAction<boolean[]>>;
}
