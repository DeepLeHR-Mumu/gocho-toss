import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { JobFormValues } from "@pages/jd/upload/type";

export interface PositionBoxProps {
  id: string;
  index: number;
  register: UseFormRegister<JobFormValues>;
  watch: UseFormWatch<JobFormValues>;
}
