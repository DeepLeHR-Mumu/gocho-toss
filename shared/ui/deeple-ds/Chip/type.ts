import { ReactNode } from "react";

import { ChipColor } from "deeple-ds/type";

export interface ChipProps {
  children?: ReactNode;
  color?: ChipColor;
  size?: "small";
  optional?: "noBorder";
}
