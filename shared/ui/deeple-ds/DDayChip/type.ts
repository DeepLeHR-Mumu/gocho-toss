import { ButtonHTMLAttributes, ReactNode } from "react";

import { DDayChipColor } from "deeple-ds/type";

export interface DDayChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: DDayChipColor;
}
