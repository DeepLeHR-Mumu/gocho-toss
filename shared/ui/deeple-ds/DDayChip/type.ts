import { ButtonHTMLAttributes } from "react";

export interface DDayChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  endTime: string;
}
