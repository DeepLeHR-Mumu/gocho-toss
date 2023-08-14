import { ButtonHTMLAttributes } from "react";

import { BorderBackgroundColor } from "deeple-ds/type";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "icon" | "blackChip" | "followButton" | "filterButton" | "140" | "392";
  color?: BorderBackgroundColor;
}
