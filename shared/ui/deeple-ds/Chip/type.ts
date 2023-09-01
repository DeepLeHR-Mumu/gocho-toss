import { ButtonHTMLAttributes, ReactNode } from "react";

import { ChipColor } from "deeple-ds/type";

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "small" | "large";
  color?: ChipColor;
  rect?: boolean;
  children?: ReactNode;
}
