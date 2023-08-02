import { ReactNode, MouseEventHandler } from "react";

import { ChipColor } from "deeple-ds/type";

export interface ButtonProps {
  type?: "button" | "reset" | "submit";
  size?: "contentFit" | "short" | "long";
  color?: ChipColor;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
