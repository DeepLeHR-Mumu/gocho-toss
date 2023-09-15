import { ButtonHTMLAttributes } from "react";

import { ButtonColor } from "../type";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "small" | "large";
  color?: ButtonColor;
  fill?: boolean;
}
