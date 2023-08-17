import { ButtonHTMLAttributes, ReactNode } from "react";

import { ChipColor } from "deeple-ds/type";

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: ChipColor;
}
