import { MouseEventHandler } from "react";

export interface ProfileProps {
  className?: string;
  size?: number;
  src: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}
