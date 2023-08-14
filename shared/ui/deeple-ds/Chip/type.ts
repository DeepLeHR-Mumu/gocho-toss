import { ReactNode } from "react";

import { BorderBackgroundColor } from "deeple-ds/type";

export interface ChipProps {
  children?: ReactNode;
  color?: BorderBackgroundColor;
  size?: "oneLetter" | "dDay" | "withIcon";
}
