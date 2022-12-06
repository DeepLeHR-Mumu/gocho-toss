import { UseFormRegister } from "react-hook-form";
import { JobFormValues } from "@pages/jd/upload/type";

export interface DatetimeBoxProps {
  register: UseFormRegister<JobFormValues>;
  valueName: "start_time" | "end_time";
}
