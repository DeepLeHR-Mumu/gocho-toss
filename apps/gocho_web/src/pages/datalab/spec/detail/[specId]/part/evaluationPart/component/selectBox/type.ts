import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { EvaluationValues } from "../../type";

export interface SelectBoxProps {
  register: UseFormRegister<EvaluationValues>;
  valueName: "strength" | "weakness";
  watchArr: string[];
  setValue: UseFormSetValue<EvaluationValues>;
  closeFunction(): void;
}
