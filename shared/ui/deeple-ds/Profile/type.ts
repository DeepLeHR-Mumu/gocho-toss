import { MouseEventHandler } from "react";

export interface ProfileProps {
  className?: string;
  size?: number;
  altText: string;
  src: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}
