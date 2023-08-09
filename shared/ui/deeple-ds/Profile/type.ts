import { MouseEventHandler } from "react";

export interface ProfileProps {
  size?: number;
  src: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}
