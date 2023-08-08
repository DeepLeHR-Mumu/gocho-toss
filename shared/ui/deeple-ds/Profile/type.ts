import { MouseEventHandler } from "react";

export interface ProfileProps {
  size?: 100 | 120;
  src: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}
