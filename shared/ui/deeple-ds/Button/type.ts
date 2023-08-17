import { ButtonHTMLAttributes } from "react";

import { ButtonColor } from "deeple-ds/type";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "long";
  color?: ButtonColor;
}
